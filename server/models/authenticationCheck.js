import express from 'express';

const router = express.Router();

router.get('authcheck', (req, res) => {
  console.log("-------------------", req.session && req.session.userId)
  if(req.session && req.session.userId){
    return res.json({loggedIn : true})
  }else{
    return res.json({loggedIn : false})
  }
})

export default router;
