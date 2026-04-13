import { useForm } from "react-hook-form";
import API from "../../api";
import { useNavigate, Link } from "react-router-dom";

export function RegistationPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
const navigate = useNavigate();
    const onSubmit = async (data) => {
        try {
            const res = await API.post("/users/register", data);
            alert(res.data.message || "Registration Successful!");
            navigate("/login");
            reset();
        } catch (err) {
            alert(err.response?.data?.error || "Registration failed");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label>Username</label>
                        <input {...register("username", { required: "Username is required" })} className="w-full border p-2 rounded" />
                        {errors.username && <p className="text-red-500">{errors.username.message}</p>}
                    </div>

                    <div>
                        <label>Email</label>
                        <input type="email" {...register("email", { required: "Email is required" })} className="w-full border p-2 rounded" />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </div>

                    <div>
                        <label>Password</label>
                        <input type="password" {...register("password", { required: "Password is required" })} className="w-full border p-2 rounded" />
                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                    </div>

                    <div>
                        <label>Mobile</label>
                        <input {...register("mobile", { required: "Mobile is required" })} className="w-full border p-2 rounded" />
                        {errors.mobile && <p className="text-red-500">{errors.mobile.message}</p>}
                    </div>

                    <button className="w-full bg-blue-600 text-white p-2 rounded">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}