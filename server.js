const express = require("express")
const app = express.Router()

    
app.get("/books",(req,res)=>{
    res.send("bookk")
})



app.listen(3000,()=>{
    console.log("Listening to server....")
})

