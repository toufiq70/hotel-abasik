// @ts-nocheck
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsGoogle, BsGithub } from "react-icons/bs";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
const Login = () => {
  const {
    logIn,
    setLoading,
    googleSignIn,
    githubLogin,
    setUser,

    forgotPassword,
  } = useContext(AuthContext);

  const [error, setError] = useState(null);

  const [userEmail, setUserEmail] = useState("");

  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        if (user.emailVerified) {
          form.reset();
          navigate("/login");
        }
        if (user) {
          navigate(from, { replace: true });
        } else {
          alert("Email not verified");
        }

        console.log("login user", user);
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          setError("Please check your email");
        } else if (error.code === " auth/wrong-password") {
          setError("Wrong Password");
        } else {
          setError(error.message);
          console.log("login error", error);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // google sign in method
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        // navigate("/login");
        console.log('google clicked');
        if (user) {
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        if (error.code === "auth/popup-closed-by-user") {
          setError("Popup closed by user");
        } else {
          setError(error.message);
        }
        console.error("google login error", error);
      });
  };

  // ========handleGithubSignIn============
  const handleGithubSignIn = () => {
    githubLogin()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/login");
        if (user) {
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        if (error.code === " auth/popup-closed-by-user") {
          setError("Popup closed by user");
        } else {
          setError(error.message);
        }
        console.error("github login error", error);
      });
  };


  // get email from email field by the blur event
  const handleEmailBlur = (event) => {
    const email = event.target.value;
    setUserEmail(email);
  };
  const handleForgotPassword = () => {
    if (!userEmail) {
      alert("Please enter your email");
    }
    forgotPassword(userEmail)
      .then(() => {
        alert("Password reset email send");
      })
      .catch((error) => {
        console.error("forgot pass error", error);
      });
  };

   return (
    <div className="mx-auto max-w-xl ">
      <div>
        <h1 className="text-center mt-8 text-xl font-semibold">Please Login</h1>
      </div>

      <div className="flex flex-col  justify-evenly px-4 mt-4">
        <button
          onClick={handleGoogleSignIn}
          className="text-white font-medium bg-red-500 rounded-sm py-1 text-[1rem] flex items-center flex-grow-0 justify-between px-4 mb-1 outline-none"
        >
          <span>
            <BsGoogle />
          </span>
          <p className="mx-auto">Sign in with Google</p>
        </button>

        <button
          onClick={handleGithubSignIn}
          className="text-white font-medium bg-slate-700 rounded-sm py-1 text-[1rem] flex items-center flex-grow-0 justify-between px-4 mb-1 outline-none"
        >
          <span>
            <BsGithub />
          </span>
          <p className="mx-auto">Sign in with Github</p>
        </button>
      </div>

      <div className="flex items-center justify-between px-4 mt-4">
        <span className="border-b-2 p-1 border-gray-400 w-full"></span>
        <span className="mx-3">or </span>
        <span className="border-b-2 p-1 border-gray-400 w-full"></span>
      </div>
      <p className="text-red-500 px-4">{error}</p>

      <form onSubmit={handleLogin} className="my-4 px-4">
        <div className="mb-1 sm:mb-2">
          <label
            className="block mb-1 font-medium text-slate-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            onBlur={handleEmailBlur}
            type="email"
            name="email"
            id="email"
            placeholder="abc@gmail.com"
            className="flex-grow  w-full h-12 px-4 mb-2 transition duration-300 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-[#DE0655] focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-1 sm:mb-2">
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
            className="flex-grow  w-full h-12 px-4 mb-2 transition duration-300 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-[#DE0655] focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gradient-to-r  from-[#EF512E] to-[#DE0655] focus:shadow-outline focus:outline-none"
        >
          Login
        </button>
        <p className="mt-1 text-sm text-blue-700 ">
          <Link
            to="/register"
            className="focus:border-blue-800 border-b hover:border-blue-800 duration-300"
          >
            Create a new account?
          </Link>
        </p>
        <p className="mt-1 text-sm text-blue-700 ">
          <Link onClick={handleForgotPassword}
            to=''
            className="focus:border-blue-800 border-b hover:border-blue-800 duration-300"
          >
            Forgot Password?
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
