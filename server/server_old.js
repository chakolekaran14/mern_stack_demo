import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from "cors";
import connectDB from './db/dbConnection.js';
import route from './routes/studentRoutes.js';

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const port = process.env.PORT || 7000;
const mongourl = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";

mongoose
    .connect(mongourl)
    .then(() => {
        console.log("MongoDb connection successfull");
        app.listen(port, () => {
            console.log(`Server has been started and listening on port : ${port}`);

        });
    })
    .catch(error => console.log("error is " + error))

app.use("/api", route);
