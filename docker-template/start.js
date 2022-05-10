const express = require("express");
const { redirect } = require("express/lib/response");
const axios =require('axios')
const app = express();
const port = 8000;

 order =false 

 url1 = "order:8000"
 url2 = "order2:8000"
 url3 = "catalog:8000"
 url4 = "catalog2:8000"
 
app.get("/purchase", async (req, res) => {
  
  console.log(req.url)

  order =!order 
     
  const req1= await axios.get('http://'+ (order? url1:url2 )+''+req.url).then(
    
    response => {console.log(response.data)
      res.json(response.data) 
  
    
  })
});


app.get("/search", async (req, res) => {
  console.log(req.url)
  order =!order 
  
  const req1= await axios.get('http://'+ (order? url3:url4 )+''+req.url).then(
    
    response => {console.log(response.data)
      res.json(response.data) 
  
    
  })
});

app.get("/info", async (req, res) => {
  console.log(req.url)
  order =!order  

  console.log('http://'+ (order? url3:url4 )+''+req.url)
  const req1= await axios.get('http://'+ (order? url3:url4 )+''+req.url) .then(
    
  response => {console.log(response.data)
    res.json(response.data) 

  
})



});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});