import Movie from "../models/movieModel.js";
import moviesInfo from '../config/moviesInfo.json' assert { type: 'json' };
import express from "express";

const seedRouter = express.Router();

seedRouter.get("/seed", async (req, res) => {
    try {
        await Movie.deleteMany({});
        const docs = await Movie.insertMany(moviesInfo);

        res.json(docs);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: true, message: "Internal Server Error" });
    }
});

export default seedRouter;
