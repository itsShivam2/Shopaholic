import React, { useContext, useState } from "react";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaUserCircle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import MyContext from "../Context/Data/MyContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../Firebase/FirebaseConfig";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import Loader from "../Components/Loader";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const context = useContext(MyContext);
  const { loading, setLoading } = context;

  const signup = async () => {
    // console.log(name, email, password);
    setLoading(true);
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    )
      return toast.error("All fields are required");
    if (password != confirmPassword) return toast.error("Password not matched");

    try {
      const users = await createUserWithEmailAndPassword(auth, email, password);

      // console.log(users);

      const user = {
        name: name,
        uid: users.user.uid,
        email: users.user.email,
        time: Timestamp.now(),
      };
      const userRef = collection(fireDB, "users");
      await addDoc(userRef, user);
      toast.success("Account created");
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setLoading(false);
    } catch (error) {
      toast.error("Error creating the account"); // You can display an error message
      setLoading(false);
    }
  };
  return (
    <div>
      <Layout>
        {loading && <Loader />}
        <div className="relative mx-auto my-8 w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
          <div className="w-full">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-teal-600 px-2 py-2 underline underline-offset-4">
                Shopaholic
              </h1>
              <h2 className="text-3xl font-semibold text-gray-900">Sign up</h2>
              <p className="mt-2 text-gray-500">Create your account</p>
            </div>
            <div className="mt-5">
              <div>
                <div className="relative mt-6">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    autoComplete="on"
                  />
                  <label
                    htmlFor="name"
                    className="flex items-center gap-1 pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                  >
                    <FaUserCircle />
                    Name
                  </label>
                </div>
                <div className="relative mt-6">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    autoComplete="on"
                  />
                  <label
                    htmlFor="email"
                    className="flex items-center gap-1 pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                  >
                    <FaEnvelope />
                    Email Address
                  </label>
                </div>
                <div className="relative mt-6">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  />
                  <label
                    htmlFor="password"
                    className="flex items-center gap-1 pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                  >
                    <FaLock />
                    Password
                  </label>
                </div>
                <div className="relative mt-6">
                  <input
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                    className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  />
                  <label
                    htmlFor="confirm-password"
                    className="flex items-center gap-1 pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                  >
                    <FaLock />
                    Confirm Password
                  </label>
                </div>

                <div className="my-6">
                  <button
                    onClick={signup}
                    className="w-4/5 hover:w-full transform-transition duration-1000 rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none hover:drop-shadow-lg"
                  >
                    Sign up
                  </button>
                </div>

                <div className="flex items-center justify-center">
                  <span className="w-1/5 h-[2px] bg-gray-500"></span>
                  <div className="w-1/5">
                    <p>OR</p>
                    <img src="" />
                  </div>
                  <span className="w-1/5 h-[2px] bg-gray-500"></span>
                </div>
                <div className="flex items-center justify-center hover:drop-shadow-lg transform-transition duration-500">
                  <div className="flex items-center justify-center gap-2 my-2 px-3 py-4 text-white bg-black rounded-md w-3/5 hover:w-4/5 transform-transition duration-1000 hover:cursor-pointer">
                    <span>Sign up with Google</span>
                    <i>
                      <FcGoogle />
                    </i>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-500">
                  Already have an account?
                  <Link
                    to={"/signin"}
                    className=" text-gray-600 font-bold hover:text-teal-600 transform-transition duration-500 hover:underline underline-offset-2 focus:text-gray-800 focus:outline-none"
                  >
                    Sign in
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Signup;
