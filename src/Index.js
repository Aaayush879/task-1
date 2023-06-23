const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())
//app.use(cors())
// connect to mongodb
mongoose.connect('mongodb+srv://ayush:ayush@cluster0.sggba.mongodb.net/?retryWrites=true&w=majority').then(() => console.log('db connected'));
const db= mongoose.connection;
app.get('/',(req,res)=>{
    res.send("hello");
})

app.post('/insert',async(req,res)=>{
    try{
        //const db=await connect();
        const data = req.body;
        const users = await db.db.collection('task-1').insertOne(data);
        res.send(users);
        console.log(users);
    }
    catch(e){
        console.log(e);
    }

})
app.get('/find/:id',async(req,res)=>{
    try{
        //const db=await connect();
        const data = req.params._id;
        const users = await db.db.collection('task-1').findOne(data);
        res.send(users);
        console.log(users);
    }
    catch(e){
        console.log(e);
    }

})
app.delete('/delete/',async(req,res)=>{
    try{
        //const db=await connect();
        const data = req.params.id;
        const users = await db.db.collection('task-1').findOneAndDelete({data});
        res.send(users);
        console.log(users);
    }
    catch(e){
        console.log(e);
    }

})





const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening to port ${PORT}`))