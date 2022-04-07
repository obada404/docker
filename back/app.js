const express = require("express");
const book=require('./book');
let mongoose = require('mongoose');
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
    const id = qdata.id;
    const filter = { Id:  id  };
  
    let stock ;
    let all;
    stock = await book.findOne(filter).select("stock");
    if(stock==null){
      res.json("no item with such id sorry");
    }
    else{
    console.log("stock :   "+ stock);
  
      console.log("dsadasdsadsad");
      all = await book.findOneAndUpdate(filter ,{$inc: {stock: -1}});
      res.json(all);
   
    }
  });

app.get("/search", async (req, res) => {
  let q = url.parse(req.url, true);
  let qdata = q.query;
  console.log(qdata.catgory);
  const filter = { catgory:  qdata.catgory  };
  const all = await book.find(filter);
  if(all==""){
    res.json("no item with such catgory sorry");
  }
  else{
  res.json(all);
  }
});

app.get("/info", async (req, res) => {
  let q = url.parse(req.url, true);
  let qdata = q.query;
  console.log(qdata);
  const id = qdata.id;
  console.log(id)
  const all = await book.findOne({ Id:  qdata.id });
  console.log(all)
  if(all==null){
    res.json("no item with such id sorry");
  }
  else{
  res.json(all);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});