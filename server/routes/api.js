const express = require('express');
const router = express.Router();
const config  = require('config');
var r = require('rethinkdbdash')(config.get('rethinkdb'));

/* GET api listing. */
router.get('/heroesApi', (req, res) => {
  r.table('heroes')
  .run()
  .then(function(response){
  	res.json(response)
  })
  .error(function(err){
  	res.sendStatus(500);
  })
});

module.exports = router;
