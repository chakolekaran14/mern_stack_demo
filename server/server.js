import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
import { connectStudentDB } from "./db/dbConnection.js";
import { connectUserDB } from "./db/userDbConnection.js";

import studentRoutes from "./routes/studentRoutes.js";
import userRoutes from "./routes/userRoutes.js";


const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/students", studentRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 8000;

// 🔥 WAIT FOR DBs BEFORE STARTING SERVER
const startServer = async () => {
    await connectStudentDB();
    await connectUserDB();

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

startServer();