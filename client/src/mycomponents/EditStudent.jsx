import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const EditStudent = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [student, setStudent] = useState({
        name: "",
        address: "",
        email: "",
        mobile: ""
    });

    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
    };

    useEffect(() => {
        const token = localStorage.getItem("token");

        axios.get("https://mern-stack-demo-h6da.onrender.com//api/students/read/${id}", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => {
                setStudent(response.data);
            })
            .catch((error) => console.log(error));
    }, [id]);

    /* const submitForm = async (e) => {
         e.preventDefault();
         try {
             const response = await axios.put(`http://127.0.0.1:8000/api/students/update/${id}`, student);
             toast.success(response.data.msg, { position: 'top-center' });
             navigate("/students");
         } catch (error) {
             console.log(error);
         }
     };*/
    const submitForm = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");

        try {
            const response = await axios.put(
                `http://127.0.0.1:8000/api/students/update/${id}`,
                student,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            toast.success(response.data.msg, { position: 'top-center' });
            navigate("/students");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-orange-200">

            <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">

                <Link to="/" className="text-blue-500 text-sm mb-2 inline-block">
                    ← Back to Home
                </Link>

                <h2 className="text-2xl font-bold text-center mb-6">
                    Update Student
                </h2>

                <form onSubmit={submitForm} className="space-y-4">

                    <div>
                        <label className="block text-sm mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={student.name}
                            onChange={inputChangeHandler}
                            className="w-full border px-3 py-2 rounded-md"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={student.address}
                            onChange={inputChangeHandler}
                            className="w-full border px-3 py-2 rounded-md"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={student.email}
                            onChange={inputChangeHandler}
                            className="w-full border px-3 py-2 rounded-md"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1">Mobile</label>
                        <input
                            type="number"
                            name="mobile"
                            value={student.mobile}
                            onChange={inputChangeHandler}
                            className="w-full border px-3 py-2 rounded-md"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
                    >
                        Update Student
                    </button>

                </form>
            </div>
        </div>
    );
};

export default EditStudent;