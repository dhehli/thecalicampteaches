import express from 'express';
import r from '../connection/connection'

const router = express.Router();

router.get('/authcheck', (req, res) => {

  if(req.session && req.session.userId){

    const userId = req.session.userId;

    r.table('user')
    .filter({ id: userId, admin: true })
    .count()
    .run()
    .then(response => response ? res.json({loggedIn: true, admin: true}) : res.json({loggedIn: true}))
    .error(err => res.send({errors: err}))
  }else{
    return res.json({loggedIn : false})
  }
})

export default router;
