const express = require("express");
const book=require('./book');
let mongoose = require('mongoose');
const axios =require('axios')
const http = require('http');
const url = require('url');
const app = express();
const port = 8080;


mongoose.connect('mongodb+srv://Adamsiksik:ebaa2009@cluster0.an1q8.mongodb.net/Project0?retryWrites=true&w=majority',()=>
  console.log("connected")
  );

app.get("/purchase", async (req, res) => {
  let q = url.parse(req.url, true);
  let qdata = q.query;
  try {
    const req1= await axios.get('http://192.168.1.104:8000/info?Id='+qdata.Id);
    console.log(req1.data ,"req1");
    let req2 ;
    if(req1.data.stock >0){
      req2 =await axios.get('http://192.168.1.104:8000'+req.url);
      console.log(req2.data ,"req2");
  
    }
    else {
      return res.json(" no stock ")
    }
    return res.json("done");
  }catch(err){
    console.log(err)
  }
  
  
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});