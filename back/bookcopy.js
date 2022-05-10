let mongoose = require('mongoose');

const bookSchema2=mongoose.Schema({
  Id :{
    require : true,
    type :Number
  },
  Name:{
    type:String,
    require:true,
  },
  stock2:{
    type: Number,
    require:true,
    min :0
  }
  ,catgory:{
    type: String ,
    require:true,
  }


})

module.exports=mongoose.model('DosBooks',bookSchema2)