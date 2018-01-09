import chai from 'chai';
import chaiHttp from 'chai-http';
import r from '../../server/connection/connection';
import bcrypt from 'bcryptjs';
import supertest from 'supertest';
import cloudinary from 'cloudinary';

let should = chai.should();
chai.use(chaiHttp);

let assert = require('assert');
let uuid;
let cookieAdmin;

const urlTestimonial = 'http://localhost:3000/api/testimonial';
const urlLogin = 'http://localhost:3000/api/login';

describe('/testimonials', () => {

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
      r.table('testimonial')
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

  describe('/GET testimonials', () => {
    it('it should get empty testimonials', (done) => {
      const req = supertest(urlTestimonial).get('');

      req.cookies = cookieAdmin;

      req.end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(0);
        done();
      });
    });
  });

  describe('/POST testimonial', () => {
    it('it should post a testimonials', (done) => {

      const data = {
        firstname: "Urs",
        lastname: "Meyer",
        quote: "awesome",
        onlineState: true,
      }

      const req = supertest(urlTestimonial).post('')

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

  describe('/GET testimonial by id', () => {
    it('it should get a single testimonial', (done) => {

      const req = supertest(urlTestimonial).get(`/${uuid}`)

      req.cookies = cookieAdmin;

      req.end((err, res) => {
        res.should.have.status(200);
        res.body.firstname.should.be.eql("Urs");
        res.body.lastname.should.be.eql("Meyer");
        res.body.quote.should.be.eql("awesome");
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

  describe('/PUT testimonial', () => {
    it('it should put a testimonials', (done) => {

      const data = {
        firstname: "Lara",
        lastname: "Roge",
        quote: "whalo",
        onlineState: false,
      }

      const req = supertest(urlTestimonial).put(`/${uuid}`)

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

  describe('/GET testimonial by id after update', () => {
    it('it should get a single testimonial', (done) => {

      const req = supertest(urlTestimonial).get(`/${uuid}`)

      req.cookies = cookieAdmin;

      req.end((err, res) => {
        res.should.have.status(200);
        res.body.firstname.should.be.eql("Lara");
        res.body.lastname.should.be.eql("Roge");
        res.body.quote.should.be.eql("whalo");
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

  describe('/DELETE testimonial', () => {
    it('it should delete a testimonials', (done) => {

      const req = supertest(urlTestimonial).delete(`/${uuid}`)

      req.cookies = cookieAdmin;

      req.end((err, res) => {
        res.should.have.status(200);
        res.body.deleted.should.be.eql(1);
        done();
      });
    });
  });

});
