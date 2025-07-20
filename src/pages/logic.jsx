import React, { useState } from "react";
import axios from "axios";

function Login()
{
   const [formData, setFormData] =useState({
        email:"",
        password:""
    })
    const[message,setMessage]=useState("")
    const handleChange=(e)=>
    {
         setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleSubmit=async(e)=>
    {
        e.preventDefault();
        try{
            const res = await axios.post("http://localhost:5000/api/auth/login", formData);
      setMessage(res.data.message);
      localStorage.setItem("token", res.data.token);
        }
        catch(err)
        {
            setMessage(err.response?.data?.message || "Login failed")
        }
    }
    return(
     <div className="flex justify-center items-center h-100  m-5 mx-auto ">
            <div className="bg-gray-200 w-120 h-75 p-4 rounded-lg">
                <h1 className="font-bold text-1.7xl mb-3">LOGIN</h1>
                <form className="flex-col justify-center items-center  " onSubmit={handleSubmit}>
                    <div>
                        <p> Don't have an account?<a href="/signup">Sign up here</a> </p>
                    
                        <input type="text" name="email" placeholder="user@example.com"onChange={handleChange} className="mt-5 block w-70 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-white focus:border-white font-bold  ml-20" ></input>
                         <input type="password" name="password" placeholder="password" onChange={handleChange}className="mt-5 block w-70 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-white focus:border-white font-bold ml-20" ></input>
                    </div>
 <button className="mt-4 bg-blue-50 p-2 rounded-lg hover:bg-blue-300 font-bold">Sign In</button>
                </form>

             <p className="mt-2 text-red-600 font-semibold">{message}</p>

            </div>
     </div>
    )
}
export default Login