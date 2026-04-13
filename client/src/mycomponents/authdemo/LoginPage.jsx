import { useForm } from "react-hook-form";
import API from "../../api";
import { useNavigate, Link } from "react-router-dom";
import ReadAllStudentRecords from "../ReadAllStudentRecords"; 
export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await API.post("/users/login", data);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert(res.data.message || "Login Successful!");
      navigate("/students");
      reset();
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label>Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full border p-2 rounded"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="w-full border p-2 rounded"
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>

          <button className="w-full bg-blue-600 text-white p-2 rounded">
            Login
          </button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link to="/register">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}