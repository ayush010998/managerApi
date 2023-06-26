const mongoose=require("mongoose");

const connectionString="mongodb://localhost:27017/tasks_manager";

mongoose.connect(connectionString,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true
})
.then(()=>console.log('mongodb connected to api...'))
.catch((err)=>console.log(err));



