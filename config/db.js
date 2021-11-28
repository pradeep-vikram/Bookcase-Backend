const mongoose = require('mongoose')

// const config = require('config');
// This config shows below warning.
// WARNING: No configurations found in configuration directory:E:\Projects\MERN-Library\server\config
//WARNING: To disable this warning set SUPPRESS_NO_CONFIG_WARNING in the environment.
const dotenv = require('dotenv')
const { MongoClient } = require('mongodb');

dotenv.config({path:'./config/config.env'})


const uri = "mongodb+srv://"+process.env.DBUSERNAME+":"+process.env.DBPASSWORD+"@cluster1.j7jm3.mongodb.net/"+process.env.DBNAME+"?retryWrites=true&w=majority";
// const uri = "mongodb+srv://pradeep-vikram:pradeep123@cluster1.j7jm3.mongodb.net/MERN-P1?retryWrites=true&w=majority";

const connectDB = async () => {
    try {
      await mongoose.connect(
        uri,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true
        }
      );
  
      console.log('MongoDB Connected ');
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  };
  
  module.exports = connectDB;










// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });