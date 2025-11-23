import React, { useState } from "react";
import { useAppContext } from "../../Context/AppContext";
import toast from "react-hot-toast";

const Login = () => {
  const {axios , setToken} = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const {data} = await axios.post('/api/admin/login' , {email , password})
      if(data.success){
        setToken(data.token)
        localStorage.setItem('token' , data.token);
        axios.defaults.headers.common['Authorization'] = data.token;
      }
      else{
        toast.error(data.message)
      }
    }catch(error){
      toast.error(error.message)
    }
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-sm p-6 max-md:m-6 border shadow-xl shadow-gray-700 rounded-lg">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full py-6 text-center">
            <h1 className="text-3xl font-bold">Admin Login</h1>
            <p className="font-light">
              Enter your details to access the admin panel
            </p>
          </div>
          <form
            onClick={handleSubmit}
            className="mt-6 w-full sm:max-w-md text-white"
          >
            <div className="flex flex-col">
              <label>Email</label>
              <input
                onChange={e => {
                  setEmail(e.target.value);
                }}
                value={email}
                type="email"
                required
                placeholder="Enter Your Email"
                className="border-b-2 border-gray-400 p-2 mb-6 outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label>Password</label>
              <input
                onChange={e => {
                  setPassword(e.target.value);
                }}
                value={password}
                type="password"
                required
                placeholder="Enter Your Password"
                className="border-b-2 border-gray-400 p-2 mb-6 outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 border rounded-lg cursor-pointer
            transition-all hover:bg-green-300 hover:text-black bg-gray-700 hover:scale-105"
            >
              Sumbit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
