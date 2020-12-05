const call_back = require('../services/get_data')

exports.dil_data = async function(req,res,next){
    var email = req.body.login
    //console.log(email)

    // call the data from service
    await call_back.call(email,(err,data)=>{
        if (err) {
            res.send(err)
        }else{
            //console.log(data)
            var len = data.length
            var cou_1=0,cou_2=0,cou_3=0,cou_4=0,cou_5=0
            //console.log(len)
            for (var i = 0;i<len;i++){
                //console.log(data[i].current_status)
                switch (data[i].current_status){
                    case "Delivered":
                        cou_1++
                    break;
                    case "In Transit":
                        cou_2++
                    break;
                    case "Out for Delivery":
                        cou_3++
                    break;
                    case "Undelivered":
                        cou_4++
                    break;
                    case "No Information Yet":
                        cou_5++
                    break;
                    default:
                        console.log('data error')
                    break
                }
            }

            res.cookie('email',email)
            res.cookie('status','Delivered')
            res.render('v1/public/das_bord.ejs',{DEL:cou_1,INT:cou_2,OOD:cou_3,DEX:cou_4,NFI:cou_5,data:data,status:'Delivered',del_data:[]})
        }
    })
}
