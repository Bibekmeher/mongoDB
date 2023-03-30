const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/coder",{useNewUrlParser:true})
.then(()=>console.log("connection created successfully"))
.catch((err)=>console.log(err));