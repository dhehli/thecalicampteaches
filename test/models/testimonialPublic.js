import chai from 'chai';
import chaiHttp from 'chai-http';

let should = chai.should();
chai.use(chaiHttp);

var assert = require('assert');

describe('/GET testimonialpublic', () => {
  it('it should GET all the testimonials', (done) => {
    chai.request('http://localhost:3000/api/testimonialpublic').get('').end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.a('array');
      res.body.length.should.be.eql(0);
      done();
    });
  });
});
