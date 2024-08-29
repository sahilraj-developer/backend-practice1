const mongoose = require('mongoose')

const ConnectDB =async(url)=>{

    try{
       await mongoose.connect(`${url}/testingdatabase`)
       console.log("Db connected") 
    }catch(error){
        console.log("db not connected",error)

    }


}

module.exports = ConnectDB;