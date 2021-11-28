const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors')
const connectDB = require('./config/db')


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

app.get("/", (req, res) => {
  res.send({ message: "We did it!" });
});

// app.post('/user',(req,res) =>{
//   console.log(req.body)
// })

const port = process.env.PORT
app.listen(port,()=>{
    console.log("Server listening port : "+port);
})