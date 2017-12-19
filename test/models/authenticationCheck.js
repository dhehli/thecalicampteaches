import chai from 'chai';
import chaiHttp from 'chai-http';
import r from '../../server/connection/connection';
import bcrypt from 'bcrypt';

let should = chai.should();
chai.use(chaiHttp);

let assert = require('assert');

const urlLogin = 'http://localhost:3000/api/login';
const urlAuthcheck = 'http://localhost:3000/api/authcheck';

describe('/POST signup', () => {

  before((done) => {
    r.table('user')
    .delete()
    .run()
    .then(() => {
      r.table('user')
      .insert([
        {
          salutation: "Mr",
          firstname: "Dominic",
          lastname: "Hehli",
          email: "dh@netlive.ch",
          password: bcrypt.hashSync("123", 10)
        },
        {
          salutation: "Mr",
          firstname: "admin",
          lastname: "admin",
          email: "admin@admin.ch",
          password: bcrypt.hashSync("admin", 10),
          admin: true
        }
      ])
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
      done();
    })
    .error(e => fail());
  })

  it('it should not login without email', (done) => {
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

  it('it should not login without password', (done) => {
    let user = {
      email: "dh@netlive.ch"
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

  it('it should not login without non existing email', (done) => {
    let user = {
      email: "dh@brot.ch",
      password: "123"
    }

    chai.request(url)
    .post('')
    .send(user)
    .end((err, res) => {
      res.should.have.status(200);
      res.body.errors[0].param.should.be.eql('email');
      res.body.errors[0].msg.should.be.eql('User not found');
      done();
    });
  });

  it('it should not login with wrong password', (done) => {
    let user = {
      email: "dh@netlive.ch",
      password: "1"
    }

    chai.request(url)
    .post('')
    .send(user)
    .end((err, res) => {
      res.should.have.status(200);
      res.body.errors[0].param.should.be.eql('password');
      res.body.errors[0].msg.should.be.eql('Password wrong');
      done();
    });
  });

  it('it should login as user', (done) => {
    let user = {
      email: "dh@netlive.ch",
      password: "123"
    }

    chai.request(url)
    .post('')
    .send(user)
    .end((err, res) => {
      res.should.have.status(200);
      res.body.loggedIn.should.be.eql(true);
      should.equal(res.body.admin, undefined);
      done();
    });
  });

  it('it should login as admin', (done) => {
    let user = {
      email: "admin@admin.ch",
      password: "admin"
    }

    chai.request(url)
    .post('')
    .send(user)
    .end((err, res) => {
      res.should.have.status(200);
      res.body.loggedIn.should.be.eql(true);
      res.body.admin.should.be.eql(true);
      done();
    });
  });
});
