let mongoose = require('mongoose');

const bookSchema=mongoose.Schema({
  Id :{
    require : true,
    type :Number
  },
  Name:{
    type:String,
    require:true,
  },
  stock:{
    type: Number,
    require:true,
    min :0

  }
  ,catgory:{
    type: String ,
    require:true,
  }


})

module.exports=mongoose.model('dosBooks',bookSchema)