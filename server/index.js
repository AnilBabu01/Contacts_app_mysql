const connectoMysql = require("./db");
connectoMysql.connect(function (err) {
    if (err) throw err;
    console.log("Myqsl successfully connected ");
   
  });
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
   
    const sql=`SELECT * FROM contacts`
    connectoMysql.query(sql,(error,result)=>{
        res.send(result);

    });

})

app.post('/api/post',(req,res)=>{
    const {name,email,contact} = req.body;
    const sqlInsert ="INSERT INTO contacts (name,email,contact) values (?,?,?)";
    connectoMysql.query(sqlInsert,[name,email,contact],(error,result)=>{
        if(error)
        {
            console.log(error);
        }
       
    })
})

app.delete("api/remove/:id",(req,res)=>{
    const {id} = req.params;
    const sqlDelete ="DELETE FROM contacts WHERE id = ? ";
    connectoMysql.query(sqlDelete,id,(error,result)=>{
        if(error)
        {
            console.log(error);
        }
       
    })
})

app.listen(port,()=>{
    console.log(`backend listening at http://localhost:${port}`);
})

