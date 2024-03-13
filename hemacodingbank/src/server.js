const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/Hema_Coding_Bank", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.once("open", () => {
  console.log("Connected to MongoDB");
});

const userSchema = new mongoose.Schema({
  username: String,
  password:String,
  accountNumber: Number,
  branch:String,
  phoneNumber: Number,
});

const Customer = mongoose.model("Customer", userSchema)

app.post("/api/signup", async(req,res)=>{
  try{
   const {username,password,accountNumber,branch,phoneNumber} = req.body;
      const newCustomer = new Customer({
        username,
        password, 
        accountNumber,
        branch,
        phoneNumber,
      })
     await newCustomer.save();
     res.status(201).json({message: "User created successfully" })
  }
  catch(error){
    console.error(error);
    res.status(500).json({message:"Internal server error"})
  }

})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
