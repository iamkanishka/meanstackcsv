const express = require('express')
const mongoose = require('mongoose')
const path = require('path');
const url = 'mongodb+srv://kanishkanaik:kanishkanaik@cluster0.xjsla.mongodb.net/meanstack?retryWrites=true&w=majority'
var cors = require('cors')

//const bodyParser = require('body-parser');

const app = express()
app.use(cors())
mongoose.connect(url, {useNewUrlParser:true,useUnifiedTopology: true } )
const con = mongoose.connection


//app.use(express.json({ limit: "50mb" , extended: true,}))
app.use(express.json({ limit: "50mb"  }))

//app.use(express.bodyParser({limit: '50mb'}))

 //app.use(bodyParser.json({ limit: "50mb" , extended: true, parameterLimit: 50000  }))
 //app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))

con.on('open', () => {
    try{
   
    console.log('Have A Nice Day...')
  
}catch(err){
    console.log(err);
    console.log('err');

    
}
})




app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});



const usersdataRouter = require('./routes/userdata')
app.use('/userdata',usersdataRouter)


const usersRouter = require('./routes/users')
app.use('/users',usersRouter)


app.listen(process.env.PORT ||9000, (req,res) => {
    try{
   console.log('Welcome To SARS-TSC')
    }catch(err){
        console.log(err);
        
    }

    
})