import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {dbConnect} from "../dbConnect.js";
dotenv.config();
const app =express();


dbConnect();
app.use(express.json())
app.use(cors())


const PORT = process.env.PORT||5050;
app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`)
})