const express = require("express");
const router = express.Router();
const { dil_data } = require("../controllers/del_data");

router.get('/',(req,res)=>{
    res.render('v1/public/log_in.ejs')
})

router.post('/',dil_data,(req,res)=>{
})

module.exports = router;