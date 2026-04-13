import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
const AddNewStudent = () => {
    const students = {
        roll: "",
        name: "",
        address: "",
        email: "",
        mobile: ""
    }
    const [student, setStudent] = useState(students);
    const navigate = useNavigate();
    const inputHandler = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
        console.log(student);
    }
    /* const submitForm = async (e) => {
         e.preventDefault();
         await axios.post("http://127.0.0.1:8000/api/create", student)
             .then((response) => {
                 console.log(response);
                 toast.success(response.data.msg, { position: 'top-right' });
                 navigate("/");
             }).catch(error => console.log(error));
     }*/
    const submitForm = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("token");

            console.log("TOKEN:", token);

            const response = await axios.post(
                "http://127.0.0.1:8000/api/students/create",
                {
                    name: student.name,
                    address: student.address,
                    email: student.email,
                    mobile: student.mobile
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            toast.success(response.data.msg);
            navigate("/students");

        } catch (error) {
            console.log("ERROR:", error.response?.data || error.message);
            toast.error("Failed to add student");
        }
    };
    return (


        <div className="min-h-screen flex items-center justify-center bg-orange-100">

            <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">

                <h1 className="text-2xl font-bold text-center mb-6">
                    Add New Student
                </h1>

                <form className="space-y-4" onSubmit={submitForm}>

                    {/* Roll */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Roll</label>
                        <input
                            type="text"
                            name="roll"
                            onChange={inputHandler}
                            placeholder="Roll Number"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            onChange={inputHandler}
                            placeholder="Enter Name"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>



                    {/* Address */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Address</label>
                        <input
                            type="text"
                            name="address"
                            onChange={inputHandler}
                            placeholder="Enter Address"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            onChange={inputHandler}
                            placeholder="Enter Email"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    {/* Mobile */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Mobile</label>
                        <input
                            type="number"
                            name="mobile"
                            onChange={inputHandler}
                            placeholder="Enter Mobile"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>
                    <div>
                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition">
                            Add Student
                        </button>
                    </div>
                </form>
            </div >
        </div >
    )
}



export default AddNewStudent;
