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

const urlOrderAdmin = 'http://localhost:3000/api/orderadmin';
const urlOrder = 'http://localhost:3000/api/order';
const urlLogin = 'http://localhost:3000/api/login';

describe('/orderAdmin', () => {

  before((done) => {
    r.table('user')
    .delete()
    .run()
    .then(() => {
      r.table('user')
      .insert({
        id: 111,
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
      r.table('order')
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

  describe('/GET order', () => {
    it('it should get empty order', (done) => {
      const req = supertest(urlOrderAdmin).get('');

      req.cookies = cookieAdmin;

      req.end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(0);
        done();
      });
    });
  });


  describe('/POST order', () => {
    it('it should post a order', (done) => {

      const data = {
        title: "cali 2018",
        userComment: "my user comment",
        quote: "awesome"
      }

      const req = supertest(urlOrder).post('')

      req.cookies = cookieAdmin;

      req
      .field(data)
      .attach('video', './test/testfiles/video.mp4')
      .end(function(err, res) {
          res.should.have.status(201);
          uuid = res.body.generated_keys[0]
          done();
      });
    });
  });

  describe('/GET order by id', () => {
    it('it should get a single order', (done) => {

      const req = supertest(urlOrderAdmin).get(`/${uuid}`)

      req.cookies = cookieAdmin;

      req.end((err, res) => {
        res.should.have.status(200);
        res.body[0].title.should.be.eql("cali 2018");
        res.body[0].userComment.should.be.eql("my user comment");
        res.body[0].userId.should.be.eql(111);
        res.body[0].orderState.should.be.eql("new");
        res.body[0].comments.should.be.a('array');
        res.body[0].comments.length.should.be.eql(0);
        res.body[0].video.should.be.an('object');
        res.body[0].video.public_id.should.be.a('string');

        let cloudinaryId = res.body[0].video.public_id;
        cloudinary.v2.uploader.destroy(cloudinaryId, (error, result)=>{
          done();
        });
      });
    });
  });

  describe('/PUT order by id', () => {
    it('it should put a single order', (done) => {

      const data = {
          comment: "surf better"
      }

      const req = supertest(urlOrderAdmin).put(`/${uuid}`)

      req.cookies = cookieAdmin;

      req
      .send(data)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.replaced.should.be.eql(1);
        done();
      });
    });
  });

  describe('/GET ordercomment by id', () => {
    it('it should get a single order', (done) => {

      const req = supertest(urlOrderAdmin).get(`/${uuid}`)

      req.cookies = cookieAdmin;

      req.end((err, res) => {
        res.should.have.status(200);
        res.body[0].title.should.be.eql("cali 2018");
        res.body[0].userComment.should.be.eql("my user comment");
        res.body[0].userId.should.be.eql(111);
        res.body[0].orderState.should.be.eql("progress");
        res.body[0].hasUnreadComment.should.be.eql(true);
        res.body[0].video.should.be.an('object');
        res.body[0].video.public_id.should.be.a('string');

        res.body[0].comments.should.be.a('array');
        res.body[0].comments.length.should.be.eql(1);
        res.body[0].comments[0].comment.should.be.eql("surf better");
        res.body[0].comments[0].adminId.should.be.eql(111);
        done();
      });
    });
  });

  describe('/Put send mail by id', () => {
    it('it should send mail to client order', (done) => {

      const req = supertest(urlOrderAdmin).put(`/mail/${uuid}`)

      req.cookies = cookieAdmin;

      req.end((err, res) => {
        res.should.have.status(200);
        res.body.replaced.should.be.eql(1);
        done();
      });
    });
  });


  describe('/DELETE order', () => {
    it('it should delete a order', (done) => {

      const req = supertest(urlOrderAdmin).delete(`/${uuid}`)

      req.cookies = cookieAdmin;

      req.end((err, res) => {
        res.should.have.status(200);
        res.body.deleted.should.be.eql(1);
        done();
      });
    });
  });
});
