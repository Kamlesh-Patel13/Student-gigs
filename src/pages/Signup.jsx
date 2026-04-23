import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    if (!form.name || !form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    // TEMP: store in localStorage (so you don't need backend yet)
    localStorage.setItem("user", JSON.stringify(form));

    alert("Account created successfully!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-purple-200">
      
      <div className="bg-white rounded-2xl shadow-lg w-[420px] overflow-hidden">
        
        {/* TOP SECTION */}
        <div className="bg-gradient-to-r from-blue-400 to-purple-400 p-6 text-center">
          <h1 className="text-white text-xl font-bold">StudentGigs</h1>
        </div>

        {/* FORM */}
        <div className="p-8">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Create an Account
          </h2>

          {/* NAME */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* PASSWORD */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full mb-6 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* SIGNUP BUTTON */}
          <button
            onClick={handleSignup}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg mb-4 hover:opacity-90"
          >
            Sign Up
          </button>

          {/* LOGIN REDIRECT */}
          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 font-medium">
              Login
            </Link>
          </div>

          {/* BACK TO HOME */}
          <button
            onClick={() => navigate("/")}
            className="mt-4 w-full border py-2 rounded-lg hover:bg-gray-100"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}