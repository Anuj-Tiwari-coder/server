import dotenv from "dotenv";
dotenv.config();

import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import route from "./routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT || 7000;
const URL = process.env.MONGO_URL;


// Middleware   
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB

mongoose.connect(URL).then(() => {
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
    .catch((err) => console.log("MongoDB connection error:", err));

app.use("/api", route);
