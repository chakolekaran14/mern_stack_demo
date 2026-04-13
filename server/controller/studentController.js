import studentModel from "../model/studentModel.js";

const getAllRecords = async (req, res) => {
    try {
        const data = await studentModel.find({});
        if (!data) {
            return res.status(404).json({ msg: "Students data not found" });
        }
        res.status(200).json(data);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }

}
const createNewRecord = async (req, res) => {
    // try {
    //     const newStudent = new Student(req.body);
    //     if (!newStudent)
    //         return res.status(404).json({ msg: "Student record not found" });
    //     const saveData = await newStudent.save();
    //     res.status(200).json(saveData);
    //     res.send("New Record is created into database");
    // } catch (error) {
    //     res.status(500).json({ errorMessage: error.message });
    // }
    try {
        const { name, address, email, mobile } = req.body;

        const studentToSave = await studentModel({
            name: name,
            address: address,
            email: email,
            mobile: mobile
        });
        if (!studentToSave) {
            return res.status(404).json({ msg: "Student data not found" });

        }
        else {
            const savedData = await studentToSave.save();
            console.log("New Record is created");
            res.status(200).json({ msg: "Student record added successfully" });
        }

        // res.send(studentToSave);
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log(error.message);
    }
}

const readRecordById = async (req, res) => {
    try {
        const result = await studentModel.findById(req.params.id);
        if (!result) {
            return res.status(404).json({ msg: "Student data not found" });

        }
        res.status(200).json(result);
        // res.send(result);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });

    }
    //res.send("readRecordById");
}
const updateRecordById = async (req, res) => {
    try {
        const data = await studentModel.findByIdAndUpdate(req.params.id, req.body);
        if (!data) {
            return res.status(404).json({ msg: "student with specified id not found" });
        }
        res.status(200).json({ msg: "Student record updated successfully" });
        console.log("Record is updated");
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });

    }
    // res.send("updateRecordById is called ");
}
const deleteRecordById = async (req, res) => {
    try {
        const result = await studentModel.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).json({ msg: "Student to deleted with specified id not found" });
        }
        res.status(200).json({ msg: " Student record is deleted Successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });

    }
    console.log("deleteRecordById is called ");
}


export { getAllRecords, createNewRecord, readRecordById, updateRecordById, deleteRecordById };
