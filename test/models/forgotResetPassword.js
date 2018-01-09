import chai from 'chai';
import chaiHttp from 'chai-http';
import r from '../../server/connection/connection';
import bcrypt from 'bcryptjs';

let should = chai.should();
chai.use(chaiHttp);

let assert = require('assert');

const url = 'http://localhost:3000/api/forgotpassword';
const urlReset = 'http://localhost:3000/api/resetpassword';
const urlLogin = 'http://localhost:3000/api/login';

describe('/POST/Get forgotResetPassword', () => {

  before((done) => {
    r.table('user')
    .delete()
    .run()
    .then(() => {
      r.table('user')
      .insert({
          salutation: "Mr",
          firstname: "Dominic",
          lastname: "Hehli",
          email: "dh@netlive.ch",
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
      r.table('forgotpassword')
      .delete()
      .run()
      .then(() => {
        done();
      })
    })
    .error(e => fail());
  })

  let passwordHash;

  it('it should not forgotpassword without email', (done) => {
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

  it('it should not forogotpassword with non existing email', (done) => {
    let user = {
      email: "dh@brot.ch"
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

  it('it should send email', (done) => {
    let user = {
      email: "dh@netlive.ch"
    }

    chai.request(url)
    .post('')
    .send(user)
    .end((err, res) => {
      res.should.have.status(200);
      res.body.mailSent.should.be.eql(true);
      done();
    });
  });

  it('it should generate passwordforgot entry', (done) => {
    let user = {
      email: "dh@netlive.ch"
    }

    chai.request(url)
    .post('')
    .send(user)
    .end((err, res) => {
      res.should.have.status(200);
      res.body.mailSent.should.be.eql(true);
      done();
    });
  });

  it('it should get resetpassword hash', (done) => {
    r.table('forgotpassword')
    .filter({email: "dh@netlive.ch", state: 0})
    .run()
    .then(res => {
      passwordHash = res[0].hash;
      done();
    })
    .error(e => fail());
  });

  it('it should show resetform with correct hash', (done) => {
    chai.request(`${urlReset}/${passwordHash}`)
    .get('')
    .end((err, res) => {
      res.should.have.status(200);
      res.body.showForm.should.be.eql(true);
      done();
    });
  });

  it('it should not show resetform with incorrect hash', (done) => {
    chai.request(`${urlReset}/123`)
    .get('')
    .end((err, res) => {
      res.should.have.status(200);
      res.body.showForm.should.be.eql(false);
      done();
    });
  });

  it('it should not reset without new password', (done) => {
    let data = {}

    chai.request(`${urlReset}/${passwordHash}`)
    .post('')
    .send(data)
    .end((err, res) => {
      res.should.have.status(200);
      res.body.errors[0].param.should.be.eql('password');
      done();
    });
  });

  it('it should reset password', (done) => {
    let data = {
      password: "456"
    }

    chai.request(`${urlReset}/${passwordHash}`)
    .post('')
    .send(data)
    .end((err, res) => {
      res.should.have.status(200);
      res.body.updated.should.be.eql(true);
      done();
    });
  });

  it('it should login user with reseted password', (done) => {
    let user = {
      email: "dh@netlive.ch",
      password: "456"
    }

    chai.request(urlLogin)
    .post('')
    .send(user)
    .end((err, res) => {
      res.should.have.status(200);
      res.body.loggedIn.should.be.eql(true);
      should.equal(res.body.admin, undefined);
      res.headers['set-cookie'].should.be.a('array');
      done();
    });
  });

});
