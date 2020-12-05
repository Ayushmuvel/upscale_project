const axios = require("axios");

var call_back = {
  call : (email,got_data)=>{
    axios({
      method: "POST",
      url: 'https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch',
      headers: {
        'Authorization': 'Bearer tTU3gFVUdP'
      },
       data: {
        'email': email
       },
       body :{
           'email':email
         }
    })
      .then(res => {
        got_data(null,res.data)
        //console.log("res", res.data);
    
      })
      .catch(err => {
        console.log("error in request", err);
        got_data(err)
      });
  },
}

module.exports = call_back;