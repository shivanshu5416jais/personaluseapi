var express = require('express');
var server = express();
var routes = require('./routes/route');
var mongoose = require('mongoose');
const cors = require('cors');
const config=require('./config/secret')
mongoose.Promise = global.Promise;
mongoose.connect(config.database);
mongoose.connection.on('connected',()=>{
    console.log('connected to db');
})
mongoose.connection.on('error',(err)=>{
    console.log('error connecting db',err);
})
 
server.use(cors());
server.use(express.json());
server.use(routes);
const port =process.env.port || 8000
server.listen(port,function check(error)
{   
    if(error)
    {
        console.log("errorr")
    }
    else
    {
        console.log("startedddddd")
    }
});
