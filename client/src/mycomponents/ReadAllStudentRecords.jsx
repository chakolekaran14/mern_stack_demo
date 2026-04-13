import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const ReadAllStudentRecords = () => {
    const [students, setStudents] = useState([]);

    /*  useEffect(() => {
          const fetchData = async () => {
              const response = await axios.get("http://127.0.0.1:8000/api");
              setStudents(response.data);
          }
          fetchData();
      }, []);*/
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token");

                const response = await axios.get(
                    "http://127.0.0.1:8000/api/students",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                setStudents(response.data);
            } catch (error) {
                console.log("Fetch error:", error);
                toast.error("Failed to load students");
            }
        };

        fetchData();
    }, []);

    /* const deleteStudent = async (userId) => {
         try {
             const response = await axios.delete(`http://127.0.0.1:8000/api/students/delete/${userId}`);
             setStudents((preStudent) =>
                 preStudent.filter((student) => student._id !== userId)
             );
             toast.success(response.data.msg, { position: 'top-right' });
         } catch (error) {
             console.log(error);
         }
     };*/
    const deleteStudent = async (userId) => {
        const token = localStorage.getItem("token");

        try {
            const response = await axios.delete(
                `http://127.0.0.1:8000/api/students/delete/${userId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setStudents((preStudent) =>
                preStudent.filter((student) => student._id !== userId)
            );

            toast.success(response.data.msg, { position: 'top-right' });

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen bg-orange-200 p-6">

            {/* Top Section */}
            <div className="max-w-5xl mx-auto mb-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Student Records</h1>

                <Link
                    to="/add-student"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    + Add New Student
                </Link>
            </div>

            {/* Table */}
            <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                <table className="w-full border border-gray-300">

                    {/* Head */}
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border px-4 py-2">Roll</th>
                            <th className="border px-4 py-2">Name</th>
                            <th className="border px-4 py-2">Address</th>
                            <th className="border px-4 py-2">Email</th>
                            <th className="border px-4 py-2">Mobile</th>
                            <th className="border px-4 py-2">Actions</th>
                        </tr>
                    </thead>

                    {/* Body */}
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={student._id} className="text-center hover:bg-gray-50">

                                <td className="border px-4 py-2">{index + 1}</td>
                                <td className="border px-4 py-2">{student.name}</td>
                                <td className="border px-4 py-2">{student.address}</td>
                                <td className="border px-4 py-2">{student.email}</td>
                                <td className="border px-4 py-2">{student.mobile}</td>

                                <td className="border px-4 py-2 space-x-2">
                                    <button
                                        onClick={() => deleteStudent(student._id)}
                                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                                    >
                                        Delete
                                    </button>

                                    <Link
                                        to={`/edit-student/${student._id}`}
                                        className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
                                    >
                                        Edit
                                    </Link>
                                </td>

                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ReadAllStudentRecords;