import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

                <p className="mb-2">Welcome, <b>{user?.username}</b></p>
                <p className="mb-4">{user?.email}</p>

                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                >
                    Logout
                </button>
            </div>
        </div>
    );
}