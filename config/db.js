const mongoose = require('mongoose')
require('dotenv').config()
const connect =async ()=>{
    try{
        const conn = await mongoose.connect(process.env.URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }catch (err){
        console.error(err)
    }
}
module.exports = connect