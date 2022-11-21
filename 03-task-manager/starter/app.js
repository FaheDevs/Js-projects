
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDb =require('./db/connect')
require('dotenv').config()

//middleware 
app.use(express.static('./public'))
app.use(express.json()) // givves us data in req.body 

// routes 
// api/ ==> convention 
app.get('/hello',(req,res)=>{
    res.send('task manager app ')
})



app.use('/api/v1/tasks',tasks)






const port = 3000
const start = async()=>{
    try{
        await connectDb(process.env.MONGO_URI)
        app.listen(port,console.log(`server is listening on port ${port}`))
    }catch(error){
        console.log(error)
    }
}

start()

