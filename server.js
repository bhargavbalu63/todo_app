const express= require('express')
const mongoose = require('mongoose')
const app= express()
const taskschema= require("./model.js")
const bodyparser= require('body-parser')
app.use(express.json())
const cors =require('cors')
app.use(cors({
    origin:"*"
}))

mongoose.connect('mongodb+srv://bhargavbalu63:9848032919@cluster0.n7alixn.mongodb.net/?retryWrites=true&w=majority')
mongoose.connection.on('connected',()=>console.log("mongo connected"))
app.get('/', async (req,res)=>
{
    const data = await taskschema.find()
res.send(data)

})


app.post('/addtask', async (req,res)=>
{

try{
    const {todo}= req.body    
const data= await taskschema.create(
    {
        todo:todo
    }
)
return res.send(await taskschema.find())
}
catch(err)
{
    console.log((err));
    
}
})
app.delete('/delete/:id', async(req,res)=>
{

try{

const data= await taskschema.findByIdAndDelete(req.params.id)
return res.send(await taskschema.find())

}catch(err)
{
    console.log(err);
    
}
})



app.listen(5000, ()=>console.log("server running at 5000"))