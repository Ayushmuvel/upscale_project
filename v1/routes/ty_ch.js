const express = require("express");
const router = express.Router();
const{dil_data} = require('../controllers/new_disp')

router.get('/del',(req,res)=>{
    res.cookie('status','Delivered')
    res.redirect('/ty_ch/change')
})

router.get('/int',(req,res)=>{
    res.cookie('status','In Transit')
    res.redirect('/ty_ch/change')
})

router.get('/ood',(req,res)=>{
    res.cookie('status','Out for Delivery')
    res.redirect('/ty_ch/change')
})

router.get('/dex',(req,res)=>{
    res.cookie('status','Undelivered')
    res.redirect('/ty_ch/change')
})

router.get('/nfi',(req,res)=>{
    res.cookie('status','No Information Yet')
    res.redirect('/ty_ch/change')
})

router.get('/change',dil_data,(req,res)=>{
})


module.exports = router;