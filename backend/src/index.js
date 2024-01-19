import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {dbConnect} from "../dbConnect.js";
import {movieRouter} from "./routes/moviesRoutes.js";
import seedRouter from "./routes/SeedRoutes.js";


dotenv.config();
const app =express();


dbConnect();
app.use(express.json())
app.use(cors())
app.use("/api/v1",movieRouter)
app.use("/api/v1",seedRouter)


const PORT = process.env.PORT||5050;
app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`)
})