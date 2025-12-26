//password -  i8ws0Qh6ea5UVDOs
const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/UserRoutes");

const app= express();
const cors = require("cors")

//Middleware    
app.use(express.json());
app.use(cors());
app.use("/users",router);

 
mongoose.connect("mongodb+srv://bavindukaviranga2020_db_user:i8ws0Qh6ea5UVDOs@cluster0.mkd9vva.mongodb.net/")
.then(()=>console.log("connected to MongoDB"))
.then(()=>{
    app.listen(5000);
})
.catch((err)=> console.log((err)));
