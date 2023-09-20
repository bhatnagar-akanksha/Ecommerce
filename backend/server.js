const app =require("./app");
const dotenv = require ('dotenv')
dotenv.config({path:'backend/config/config.env'})
const connectDataBase = require('./config/database')
//connecting to db
connectDataBase();
app.listen(process.env.PORT,()=>{
    console.log(`listening to on http://localhost:${process.env.PORT}`);
})