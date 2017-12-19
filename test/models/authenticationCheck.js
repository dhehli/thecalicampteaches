import chai from 'chai';
import chaiHttp from 'chai-http';
import r from '../../server/connection/connection';
import bcrypt from 'bcrypt';

let should = chai.should();
chai.use(chaiHttp);

let assert = require('assert');

const url = 'http://localhost:3000/api/login';
const urlAuthcheck = 'http://localhost:3000/api/authcheck';

describe('/Get autcheck', () => {

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

  let cookieAdmin;
  let cookieUser;

  it('it should save admin cookie', (done) => {
    let user = {
      email: "admin@admin.ch",
      password: "admin"
    }

    chai.request(url)
    .post('')
    .send(user)
    .end((err, res) => {
      cookieAdmin = res.headers['set-cookie'].pop().split(';')[0];
      done();
    });
  });

  it('it should save user cookie', (done) => {
    let user = {
      email: "dh@netlive.ch",
      password: "123"
    }

    chai.request(url)
    .post('')
    .send(user)
    .end((err, res) => {
      cookieUser = res.headers['set-cookie'].pop().split(';')[0];
      done();
    });
  });

  it('it should be logged in as admin', (done) => {
    const req = chai.request(urlAuthcheck).get('');

    req.cookies = cookieAdmin;

    req.end((err, res) => {
      res.should.have.status(200);
      res.body.loggedIn.should.be.eql(true);
      res.body.admin.should.be.eql(true);
      done();
    });
  });

  it('it should be logged in as user', (done) => {
    const req = chai.request(urlAuthcheck).get('');

    req.cookies = cookieUser;

    req.end((err, res) => {
      res.should.have.status(200);
      res.body.loggedIn.should.be.eql(true);
      should.equal(res.body.admin, undefined);
      done();
    });
  });

});
