const express = require("express");
const router = express.Router();
const{dil_data} = require('../controllers/dis_ship_data')

router.get('/',dil_data,(req,res)=>{
})

router.post('/',(req,res)=>{
})

module.exports = router;