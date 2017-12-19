import chai from 'chai';
import chaiHttp from 'chai-http';
import r from '../../server/connection/connection';
import bcrypt from 'bcrypt';

let should = chai.should();
chai.use(chaiHttp);

let assert = require('assert');

const url = 'http://localhost:3000/api/forgotpassword';

describe('/POST forgotpassword', () => {

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
      done();
    })
    .error(e => fail());
  })

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

});
