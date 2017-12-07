import express from 'express';

const router = express.Router();

router.get('/authcheck', (req, res) => {
  console.log("cookie", req.params)
  console.log("this is used to check if e user is logged in", req.session && req.session.userId)
  // FIXME: req.session is always undefined but only when i use angular work with postman
  if(req.session && req.session.userId){
    return res.json({loggedIn : true})
  }else{
    return res.json({loggedIn : false})
  }
})

export default router;
