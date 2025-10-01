import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.ts";

const app = express();
dotenv.config({});

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server active at port: ${PORT}`)
    connectDB();
})