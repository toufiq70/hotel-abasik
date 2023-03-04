import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsGoogle, BsLockFill } from "react-icons/bs";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
const Register = () => {

    // method load from context api
    const {createUser,setUser,verifyEmail} = useContext(AuthContext)

    // show error state set
    const [error, setError] = useState(null)

    const navigate = useNavigate()

    // setup crate user methods
    const handleCreateUser =(event) => {
      event.preventDefault()
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value
      console.log(name, email, password);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            setUser(user)
            console.log(user);
            form.reset()
            handleEmailVerification()
            alert("Please verify your email before login");
            navigate('/login')
        })
        .catch(error => {
          if(error.code === "auth/email-already-in-use"){
            setError('The email address is already used');
        }
        else if(error.code === "auth/invalid-email"){
            setError("The email address is not valid");
        }
        else if(error.code === "auth/operation-not-allowed"){
            setError("Operation Not Allowed")
        }
        else if(error.code === "auth/weak-password"){
            setError("Password should be at 6 characters")
        }
        else{
            setError(error.message);
            console.log("register error", error);
        }
        })
    }

    // email verification
      const handleEmailVerification = () => {
        verifyEmail()
        .then(() => {
          
        })
        .catch(error => {
          console.error(error)
        })
      }








  return (
    <div className="mx-auto max-w-xl ">
      <div>
        <h1 className="text-center mt-8 text-xl font-semibold">
          Please Register
        </h1>
      </div>
      <form onSubmit={handleCreateUser} className="my-4 px-4">
        <div className="mb-1 sm:mb-2">
          <label
            className="block mb-1 font-medium text-slate-700"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="john mia"
            className="flex-grow  w-full h-12 px-4 mb-2 transition duration-300 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-[#DE0655] focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-1 sm:mb-2">
          <label
            className="block mb-1 font-medium text-slate-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="abc@gmail.com"
            className="flex-grow  w-full h-12 px-4 mb-2 transition duration-300 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-[#DE0655] focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-1">
          <label
            className="block mb-1 font-medium text-slate-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            className="flex-grow  w-full h-12 px-4 mb-2 transition duration-300 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-[#DE0655] focus:outline-none focus:shadow-outline focus:bg-sky-100"
          />
        </div>

        <p className="text-red-500 mb-1 ">{error}</p>
        <button
        
          type="submit"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gradient-to-r  from-[#EF512E] to-[#DE0655] focus:shadow-outline focus:outline-none"
        >
          Register
        </button>
        <p className="mt-1 text-sm text-blue-700 ">
          <Link
            to="/login"
            className="focus:border-blue-800 border-b hover:border-blue-800 duration-300"
          >
            Already have an account?
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
