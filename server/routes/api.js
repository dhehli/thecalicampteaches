const express = require('express');
const router = express.Router();
const r = require('rethinkdb');
const config  = require('config');


/* GET api listing. */
router.get('/heroesApi', (req, res) => {
  var connection = null;
  r.connect( {host: 'localhost', port: 28015}, function(err, conn) {
      if (err) throw err;
      connection = conn;

      r.db('thecalicampteaches').table('heroes').run(connection, function(err, cursor) {
          if (err) throw err;
          cursor.toArray(function(err, result) {
              if (err) throw err;
              res.json(result);
          });
      });
  })
});

module.exports = router;
