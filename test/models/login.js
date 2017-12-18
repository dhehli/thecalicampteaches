import chai from 'chai';
import chaiHttp from 'chai-http';
import r from '../../server/connection/connection';

let should = chai.should();
chai.use(chaiHttp);

let assert = require('assert');

const url = 'http://localhost:3000/api/login';

describe('/POST login', () => {

  before((done) => {
    r.table('user')
    .delete()
    .run()
    .then(e => done())
    .error(e => fail());
  })

  it('it should not post a user without email', (done) => {
    let user = {}

    chai.request(url)
    .post('')
    .send(user)
    .end((err, res) => {
      res.should.have.status(200);
      res.body.errors[0].param.should.be.eql('email');
      done();
    });
  });

  it('it should not post a user without password', (done) => {
    let user = {
      email: "dh@netlive.ch",
    }

    chai.request(url)
    .post('')
    .send(user)
    .end((err, res) => {
      res.should.have.status(200);
      res.body.errors[0].param.should.be.eql('password');
      done();
    });
  });

  /*it('it should post a user with all fields', (done) => {
    let user = {
      salutation: "Mr",
      firstname: "Dominic",
      lastname: "Hehli",
      email: "dh@netlive.ch",
      password: "123"
    }

    chai.request(url)
    .post('')
    .send(user)
    .end((err, res) => {
      res.should.have.status(201);
      done();
    });
  });

  it('it should not post a user with duplicated email', (done) => {
    let user = {
      salutation: "Mr",
      firstname: "Dominic",
      lastname: "Hehli",
      email: "dh@netlive.ch",
      password: "123"
    }

    chai.request(url)
    .post('')
    .send(user)
    .end((err, res) => {
      res.should.have.status(200);
      res.body.errors[0].param.should.be.eql('email');
      res.body.errors[0].msg.should.be.eql('Duplicated email');
      done();
    });
  });*/
});
