const mongoose = require('mongoose')
const todoschema= new mongoose.Schema(
    {
      todo:{type: String,required:true},

 
    }
)
const Todo = mongoose.model("todo", todoschema)
module.exports= Todo