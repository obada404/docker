const express = require("express");
const { redirect } = require("express/lib/response");
const app = express();
const port = 8090;
app.get("/purchase", async (req, res) => {
  
  console.log(req.url)



    return res.redirect('http://localhost:8080'+req.url);
});


app.get("/search", async (req, res) => {
  console.log(req.url)

  return res.redirect('http://localhost:8000'+req.url);
});

app.get("/info", async (req, res) => {
  console.log(req.url)

  return res.redirect('http://localhost:8000'+req.url);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});