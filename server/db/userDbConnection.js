import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();  // 🔥 ADD THIS

const userDB = mongoose.createConnection(process.env.DATABASE_URL);

// ✅ Wait for connection
export const connectUserDB = async () => {
    try {
        await userDB.asPromise();
        console.log("User DB Connected");
    } catch (err) {
        console.log("User DB Error:", err.message);
    }
};

export default userDB;
/*import mongoose from "mongoose";

const userDB = mongoose.createConnection(process.env.MONGO_URL);

userDB.on("connected", () => {
    console.log("User DB Connected");
});

userDB.on("error", (err) => {
    console.log("User DB Error:", err.message);
});

export default userDB;*/
/*import mongoose from "mongoose";

const connectUserDB = (url) => {
    const userDB = mongoose.createConnection(url);

    userDB.on("connected", () => {
        console.log("User DB Connected");
    });

    userDB.on("error", (err) => {
        console.log("User DB Error:", err.message);
    });

    return userDB;
};

export default connectUserDB;*/
/*import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1); // stop server if DB fails
    }
};

export default connectDB;*/