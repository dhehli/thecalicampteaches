import express from 'express';

const router = express.Router();

router.get('/authcheck', (req, res) => {
  
  if(req.session && req.session.userId){
    return res.json({loggedIn : true})
  }else{
    return res.json({loggedIn : false})
  }
})

export default router;
