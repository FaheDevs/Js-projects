const mongoose = require('mongoose')

const connectDb = (url) => {
    mongoose.connect(url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true,
})
} 
// promesse --> async

//.then(()=>{console.log('connected to db ')})
//.catch((err)=>{console.log(err)})

module.exports=connectDb