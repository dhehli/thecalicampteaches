import chai from 'chai';
import chaiHttp from 'chai-http';

let should = chai.should();
chai.use(chaiHttp);

var assert = require('assert');

describe('/POST signup', () => {

  it('it should not post a user without salutation', (done) => {
    let user = {}

    chai.request('http://localhost:3000/api/signup')
    .post('')
    .send(user)
    .end((err, res) => {
      res.should.have.status(200);
      res.body.errors[0].param.should.be.eql('salutation');
      done();
    });
  });


  it('it should not post a user without firstname', (done) => {
    let user = {
      salutation: "Mr"
    }

    chai.request('http://localhost:3000/api/signup')
    .post('')
    .send(user)
    .end((err, res) => {
      res.should.have.status(200);
      res.body.errors[0].param.should.be.eql('firstname');
      done();
    });
  });

  it('it should not post a user without lastname', (done) => {
    let user = {
      salutation: "Mr",
      firstname: "Dominic"
    }

    chai.request('http://localhost:3000/api/signup')
    .post('')
    .send(user)
    .end((err, res) => {
      res.should.have.status(200);
      res.body.errors[0].param.should.be.eql('lastname');
      done();
    });
  });

  it('it should not post a user without email', (done) => {
    let user = {
      salutation: "Mr",
      firstname: "Dominic",
      lastname: "Hehli"
    }

    chai.request('http://localhost:3000/api/signup')
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
      salutation: "Mr",
      firstname: "Dominic",
      lastname: "Hehli",
      email: "dh@netlive.ch"
    }

    chai.request('http://localhost:3000/api/signup')
    .post('')
    .send(user)
    .end((err, res) => {
      res.should.have.status(200);
      res.body.errors[0].param.should.be.eql('password');
      done();
    });
  });

  it('it should post a user with all fields', (done) => {
    let user = {
      salutation: "Mr",
      firstname: "Dominic",
      lastname: "Hehli",
      email: "dh@netlive.ch",
      password: "123"
    }

    chai.request('http://localhost:3000/api/signup')
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

    chai.request('http://localhost:3000/api/signup')
    .post('')
    .send(user)
    .end((err, res) => {
      res.should.have.status(200);
      res.body.errors[0].param.should.be.eql('email');
      res.body.errors[0].msg.should.be.eql('Duplicated email');
      done();
    });
  });
});
