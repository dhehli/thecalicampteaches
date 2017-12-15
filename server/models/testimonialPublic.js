import express from 'express';
import r from '../connection/connection'

const router = express.Router();

const table = 'testimonial';
const url = 'testimonialpublic';
// Get All
router.get(`/${url}`, (req, res) => {
 r.table(table)
 .run()
 .then(response =>	res.json(response))
 .error(err => res.status(500).send({error: err}))
})

export default router;
