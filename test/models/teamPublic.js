import chai from 'chai';
import chaiHttp from 'chai-http';

let should = chai.should();
chai.use(chaiHttp);

let assert = require('assert');

const url = 'http://localhost:3000/api/teampublic'

describe('/GET teampublic', () => {
  it('it should GET all the teams', (done) => {
    chai.request(url).get('').end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.a('array');
      res.body.length.should.be.eql(0);
      done();
    });
  });
});
