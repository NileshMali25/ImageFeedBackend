const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const mongoose=require('mongoose');

async function connectDB(){
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('connected to database');
}

module.exports=connectDB;