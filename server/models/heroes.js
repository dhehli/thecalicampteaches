const express = require('express');
const router = express.Router();
const config  = require('config');
var r = require('rethinkdbdash')(config.get('rethinkdb'));

const table = 'heroes';

/* GET api listing. */
router.get('/heroesApi', (req, res) => {
  r.table(table)
  .run()
  .then(response =>	res.json(response))
  .error(err => res.sendStatus(500))
});

router.post('/heroesApi', (req, res) => {
  r.table(table)
  .run()
  .
})

module.exports = router;
