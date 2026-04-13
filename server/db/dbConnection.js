import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();  // 🔥 ADD THIS

const studentDB = mongoose.createConnection(process.env.DATABASE_URL);

export const connectStudentDB = async () => {
    try {
        await studentDB.asPromise();
        console.log("Student DB Connected");
    } catch (err) {
        console.log("Student DB Error:", err.message);
    }
};

export default studentDB;
/*import mongoose from "mongoose";

const studentDB = mongoose.createConnection(process.env.DATABASE_URL);

studentDB.on("connected", () => {
    console.log("Student DB Connected");
});

studentDB.on("error", (err) => {
    console.log("Student DB Error:", err.message);
});

export default studentDB;*/
/*import mongoose from "mongoose";

const connectStudentDB = (url) => {
    const studentDB = mongoose.createConnection(url);

    studentDB.on("connected", () => {
        console.log("Student DB Connected");
    });

    studentDB.on("error", (err) => {
        console.log("Student DB Error:", err.message);
    });

    return studentDB;
};

export default connectStudentDB;*/
/*const connectDB = async (DATABASE_URL) => {

    try {

        const data = await mongoose.connect(DATABASE_URL);
        if (data) {
            console.log("Connection Successfull");
        }
        else {
            console.log("Connecion failed");
        }
    } catch (error) {
        console.log(error.message);
    }
}
export default connectDB;*/