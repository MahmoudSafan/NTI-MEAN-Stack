const mongoose = require('mongoose')

try{
    mongoose.connect(process.env.MONGOURL,{
        useCreateIndex: true,
        useFindAndModify: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}
catch(e){
    console.log(e)
}