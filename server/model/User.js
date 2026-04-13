import e from "express";
import mongoose from "mongoose";
import userDB from "../db/userDbConnection.js";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mobile: { type: String, required: true }
}, { timestamps: true });
//export default mongoose.model("User", userSchema);
export default userDB.model("User", userSchema); 