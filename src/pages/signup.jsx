import React, { useState } from "react";
import axios from "axios";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", formData);
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-100 m-5 mx-auto">
      <div className="bg-gray-200 w-120 h-90 p-4 rounded-lg">
        <h1 className="font-bold text-2xl mb-3">SIGN UP</h1>
        <form className="flex-col justify-center items-center" onSubmit={handleSubmit}>
          <div>
            <p>
              Have an account? <a href="/login">Sign in here</a>
            </p>

            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              className="mt-5 block w-70 px-3 py-2 border border-gray-300 rounded-md shadow-sm font-bold ml-20"
            />
            <input
              type="email"
              name="email"
              placeholder="user@example.com"
              onChange={handleChange}
              className="mt-5 block w-70 px-3 py-2 border border-gray-300 rounded-md shadow-sm font-bold ml-20"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="mt-5 block w-70 px-3 py-2 border border-gray-300 rounded-md shadow-sm font-bold ml-20"
            />
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-50 p-2 rounded-lg hover:bg-blue-300 font-bold"
          >
            Register
          </button>
        </form>
        <p className="mt-2 text-red-600 font-semibold">{message}</p>
      </div>
    </div>
  );
}

export default SignUp;
