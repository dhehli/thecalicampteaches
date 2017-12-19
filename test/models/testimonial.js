import chai from 'chai';
import chaiHttp from 'chai-http';
import r from '../../server/connection/connection';
import bcrypt from 'bcrypt';
import fs from 'fs';
import supertest from 'supertest';

let should = chai.should();

let assert = require('assert');

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

  let cookieAdmin;

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
        file: "abc"
      }

      const req = supertest(urlTestimonial).post('')

      req.cookies = cookieAdmin;

      req
      .field(data)
      .attach('image', './test/testfiles/portrait.jpg')
      .end(function(err, res) {
          res.should.have.status(201);

          done();
      });
    });
  });

});
