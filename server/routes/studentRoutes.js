import express from "express"
import { createNewRecord, getAllRecords, readRecordById, updateRecordById, deleteRecordById } from "../controller/studentController.js"
import authMiddleware from "../middleware/authMiddleware.js";

const route = express.Router();
route.get("/", getAllRecords);
route.use(authMiddleware); // Apply auth middleware to all routes below
route.post("/create", createNewRecord);
route.get("/read/:id", readRecordById);
route.put("/update/:id", updateRecordById);
route.delete("/delete/:id", deleteRecordById);

export default route;

