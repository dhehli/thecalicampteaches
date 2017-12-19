import chai from 'chai';
import chaiHttp from 'chai-http';
import r from '../../server/connection/connection';
import bcrypt from 'bcrypt';
import supertest from 'supertest';
import cloudinary from 'cloudinary';

let should = chai.should();
chai.use(chaiHttp);

let assert = require('assert');
let uuid;
let cookieAdmin;

const urlTeam = 'http://localhost:3000/api/team';
const urlLogin = 'http://localhost:3000/api/login';

describe('/teamAdmin', () => {

  before((done) => {
    r.table('user')
    .delete()
    .run()
    .then(() => {
      r.table('user')
      .insert({
        salutation: "Mr",
        firstname: "admin",
        lastname: "admin",
        email: "admin@admin.ch",
        password: bcrypt.hashSync("admin", 10),
        admin: true
      })
      .run()
      .then(() => {
        done();
      })
      .error(e => fail());
    })
    .error(e => fail());
  })

  after((done) => {
    r.table('user')
    .delete()
    .run()
    .then(() => {
      r.table('team')
      .delete()
      .run()
      .then(() => {
        done();
      })
    })
    .error(e => fail());
  })

  it('it should save admin cookie', (done) => {
    let user = {
      email: "admin@admin.ch",
      password: "admin"
    }

    supertest(urlLogin)
    .post('')
    .send(user)
    .end((err, res) => {
      cookieAdmin = res.headers['set-cookie'].pop().split(';')[0];
      done();
    });
  });

  describe('/GET teams', () => {
    it('it should get empty teams', (done) => {
      const req = supertest(urlTeam).get('');

      req.cookies = cookieAdmin;

      req.end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(0);
        done();
      });
    });
  });

  describe('/POST team', () => {
    it('it should post a teams', (done) => {

      const data = {
        firstname: "Mario",
        lastname: "Brot",
        email: "um@netlie.ch",
        location: "cali",
        onlineState: true
      }

      const req = supertest(urlTeam).post('')

      req.cookies = cookieAdmin;

      req
      .field(data)
      .attach('image', './test/testfiles/portrait.jpg')
      .end(function(err, res) {
          res.should.have.status(201);
          uuid = res.body.generated_keys[0]
          done();
      });
    });
  });


  describe('/GET team by id', () => {
    it('it should get a single team', (done) => {

      const req = supertest(urlTeam).get(`/${uuid}`)

      req.cookies = cookieAdmin;

      req.end((err, res) => {
        res.should.have.status(200);
        res.body.firstname.should.be.eql("Mario");
        res.body.lastname.should.be.eql("Brot");
        res.body.email.should.be.eql("um@netlie.ch");
        res.body.location.should.be.eql("cali");
        res.body.onlineState.should.be.eql("true");
        res.body.image.should.be.an('object');
        res.body.image.public_id.should.be.a('string');

        let cloudinaryId = res.body.image.public_id;
        cloudinary.v2.uploader.destroy(cloudinaryId, (error, result)=>{
          done();
        });
      });
    });
  });

  describe('/PUT team', () => {
    it('it should put a teams', (done) => {

      const data = {
        firstname: "Linux",
        lastname: "Tor",
        email: "tw@netlie.ch",
        location: "ny",
        onlineState: false
      }

      const req = supertest(urlTeam).put(`/${uuid}`)

      req.cookies = cookieAdmin;

      req
      .field(data)
      .attach('image', './test/testfiles/portrait.jpg')
      .end(function(err, res) {
        res.should.have.status(200);
        res.body.replaced.should.be.eql(1);
        done()
      });
    });
  });

  describe('/GET team by id after update', () => {
    it('it should get a single team', (done) => {

      const req = supertest(urlTeam).get(`/${uuid}`)

      req.cookies = cookieAdmin;

      req.end((err, res) => {
        res.should.have.status(200);
        res.body.firstname.should.be.eql("Linux");
        res.body.lastname.should.be.eql("Tor");
        res.body.email.should.be.eql("tw@netlie.ch");
        res.body.location.should.be.eql("ny");
        res.body.onlineState.should.be.eql("false");
        res.body.image.should.be.an('object');
        res.body.image.public_id.should.be.a('string');

        let cloudinaryId = res.body.image.public_id;
        cloudinary.v2.uploader.destroy(cloudinaryId, (error, result)=>{
          done();
        });
      });
    });
  });

  describe('/DELETE team', () => {
    it('it should delete a teams', (done) => {

      const req = supertest(urlTeam).delete(`/${uuid}`)

      req.cookies = cookieAdmin;

      req.end((err, res) => {
        res.should.have.status(200);
        res.body.deleted.should.be.eql(1);
        done();
      });
    });
  });

});
