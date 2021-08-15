const app = require('./src/index')

try{
    app.listen(process.env.PORT)
}
catch(e){
    console.log(e);
}