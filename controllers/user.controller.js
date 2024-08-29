const Users = require('../models/user.models');
const bcrypt = require('bcrypt');


exports.getallusers=async(req,res)=>{

    try{
        console.log("user try ")
        const user = await Users.find({})
        console.log("user",user)
        if(user?.length>0){
            res.send({status:200,message:'success',user:user})
        }else{
            res.send({status:404,message:'No Data Found',user:user})
        }
       

    }catch(error){
        res.send({"error":error})
    }

}

exports.createUser=async(req,res)=>{
    const {name,email,password} = req.body;

    try{
        const salt = await bcrypt.genSalt(10)
       
        const hashpassword = await bcrypt.hash(password,salt)   
        const data = new Users({
            name:name,
            email:email,
            password:hashpassword
        })
        await data.save()
        if(data){
            res.send({status:201,message:'created',user:data})
        }
        // else{
        //     res.send({status:404,message:'No Data Found',user:user})
        // }
       

    }catch(error){
        res.send({"error":error})
    }

}