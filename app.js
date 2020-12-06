const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require('cookie-parser');

const {conn_port} = require('./config/sys_vari');

//adding express 
var app = express();
app.use(cookieParser());
app.use(express.static('v1/public'));

//adding middle wear - cors
app.use(cors());

//body parsera
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);

// calling routes files
var log_in = require('./v1/routes/log_in');
var disp = require('./v1/routes/disp_ship_data');
var ty_ch= require('./v1/routes/ty_ch');

// redirecting routes 
app.use('/login',log_in) //login route
app.use('/disp_con',disp)
app.use('/ty_ch',ty_ch)

// end point 
app.get('/',(req,res)=>{
  res.send('it work')
})

// defining port to listen
app.listen(conn_port,()=>{
  console.log("server started at port "+ conn_port);
})