const express = require("express");
let mongoose = require('mongoose');
const axios =require('axios')
const http = require('http');
const url = require('url');
const app = express();
const port = 8000;


mongoose.connect('mongodb+srv://Adamsiksik:ebaa2009@cluster0.an1q8.mongodb.net/Project0?retryWrites=true&w=majority',()=>
  console.log("connected")
  );

app.get("/purchase", async (req, res) => {
  let q = url.parse(req.url, true);
  let qdata = q.query;
  try {
    const req1= await axios.get('http://'+process.env.ORDER+'/info?id='+qdata.id);
    console.log(req1.data ,"req1");
    let req2 ;
    if(req1.data.stock >0){
      req2 =await axios.get('http://'+process.env.ORDER+''+req.url);
      return res.json("done");
    }
    else if(req1.data.stock ==0){
      return res.json(" no stock ")
    }
    else{
      return res.json(" no item with such id ")
    }
  }catch(err){
    console.log(err)
  }
  
  
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});