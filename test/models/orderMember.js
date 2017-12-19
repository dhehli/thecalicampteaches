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
let cookieUser;

const urlTestimonial = 'http://localhost:3000/api/order';
const urlLogin = 'http://localhost:3000/api/login';

describe('/order', () => {

  before((done) => {
    r.table('user')
    .delete()
    .run()
    .then(() => {
      r.table('user')
      .insert({
        id: 111,
        salutation: "Mr",
        firstname: "dominic",
        lastname: "hehli",
        email: "dhehli@netlive.ch",
        password: bcrypt.hashSync("123", 10)
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

  it('it should save user cookie', (done) => {
    let user = {
      email: "dhehli@netlive.ch",
      password: "123"
    }

    supertest(urlLogin)
    .post('')
    .send(user)
    .end((err, res) => {
      cookieUser = res.headers['set-cookie'].pop().split(';')[0];
      done();
    });
  });

  describe('/GET order', () => {
    it('it should get empty order', (done) => {
      const req = supertest(urlTestimonial).get('');

      req.cookies = cookieUser;

      req.end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(0);
        done();
      });
    });
  });

  describe('/POST testimonial', () => {
    it('it should post a order', (done) => {

      const data = {
        title: "cali 2018",
        userComment: "my user comment",
        quote: "awesome"
      }

      const req = supertest(urlTestimonial).post('')

      req.cookies = cookieUser;

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

  describe('/GET testimonial by id', () => {
    it('it should get a single testimonial', (done) => {

      const req = supertest(urlTestimonial).get(`/${uuid}`)

      req.cookies = cookieUser;

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


  describe('/DELETE testimonial', () => {
    it('it should delete a order', (done) => {

      const req = supertest(urlTestimonial).delete(`/${uuid}`)

      req.cookies = cookieUser;

      req.end((err, res) => {
        res.should.have.status(200);
        res.body.deleted.should.be.eql(1);
        done();
      });
    });
  });

});
