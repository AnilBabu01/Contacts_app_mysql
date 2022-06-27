const connectoMysql = require("./db");

const express = require('express');
const cors =require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:"true"}))
app.get('/',(req,res)=>{
    res.send('welcome learn express')
})

app.get('/api/get',(req,res)=>{
    connectoMysql.connect(function (err) {
        if (err) throw err;
        console.log("Myqsl successfully connected ");
       
      });
    const sql=`SELECT * FROM contacts`
    connectoMysql.query(sql,(error,result)=>{
        res.send(result);

    });

})

app.listen(port,()=>{
    console.log(`backend listening at http://localhost:${port}`);
})

