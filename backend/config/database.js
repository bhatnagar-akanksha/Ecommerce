const connectDataBase =()=>{
    const mongoose = require('mongoose');
    mongoose.connect(process.env.DB_URI, {useNewUrlParser:true,useUnifiedTopology:true}).then((data)=>{
        console.log(`mongod connected to server:${data.connection.host}`);
    }).catch((err)=>{
         console.log(err)
    })
}
module.exports = connectDataBase