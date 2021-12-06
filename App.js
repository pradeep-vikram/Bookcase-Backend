const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors')
const connectDB = require('./config/db')

const login = require('./routes/api/login')

const app = express()

// Connect database
connectDB();


// --> for cors(cross origin resource sharing)
app.use(cors())

// ---> for dotenv
dotenv.config({path:'./config/config.env'})

// ---> for body-Parser
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/',login);


const port = process.env.PORT
app.listen(port,()=>{
    console.log("Server listening port : "+port);
})