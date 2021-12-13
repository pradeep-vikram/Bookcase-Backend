const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors')
const connectDB = require('./config/db')

const login = require('./routes/api/login')
const addBook = require('./routes/api/addBook')
const home = require('./routes/api/home')

const app = express()

// Connect database
connectDB();

// Load user model
// const User = require('./models/user')

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
app.use('/addBook',addBook);
app.use('/home',home)


const port = process.env.PORT
app.listen(port,()=>{
    console.log("Server listening port : "+port);
})