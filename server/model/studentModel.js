import mongoose from "mongoose";
import studentDB from "../db/dbConnection.js";

const studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        mobile: {
            type: Number,
            required: true
        }
    }
);
//const studentModel = mongoose.model("student", studentSchema);
//export default studentModel;
export default studentDB.model("Student", studentSchema);