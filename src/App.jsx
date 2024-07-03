import "./App.css";
import img from "../src/images/1.svg";
import {
  FaUser,
  FaLock,
  FaFacebook,
  FaGoogle,
  FaTwitter,
} from "react-icons/fa";

function App() {
  return (
    <div className="px-32 py-5 h-screen overflow-x-hidden bg-slate-300">
      <div className="navbar pt-3 flex justify-between px-5 items-center">
        <div className="text-black text-3xl font-bold cursor-pointer ">
          <span className="font-extrabold text-4xl text-red-600">
            Welcome!{" "}
          </span>
          Developers
        </div>
        <div className="">
          <p className="font-bold text-xl ">
            New User?
            <span className="pl-1 cursor-pointer text-red-600"> Signup</span>
          </p>
        </div>
      </div>

      <div className="hro-section flex items-center justify-evenly h-full">
        <div className="hero-right flex-1">
          <img className="w-screen" src={img} alt="" />
        </div>
        <div className="hero-left flex-1 flex items-center justify-center">
          <div className="border-4 border-blue-500 p-14 rounded-md shadow-slate-700 shadow-2xl ">
            <div className="mb-10 ">
              <h2 className="text-black text-3xl font-bold">Welcome Back</h2>
              <p className="text-black text-opacity-70 font-bold text-xl ">
                Login To Continue
              </p>
            </div>
            <div className="flex items-center mb-5 bg-white p-5 border-2 rounded-2xl border-blue-500 hover:scale-105 duration-150  ">
              <FaUser className="text-blue-400 text-2xl" />
              <input
                className="outline-none w-full px-5"
                type="email"
                name=""
                id=""
                placeholder="EX:john@gmail.com"
              />
            </div>
            <div className="flex items-center mb-5 bg-white p-5 border-2 rounded-2xl border-blue-500  hover:scale-105 duration-150   ">
              <FaLock className="text-blue-400 text-2xl" />
              <input
                className="outline-none w-full px-5"
                type="password"
                name=""
                id=""
                placeholder="Enter Password"
              />
            </div>
            <div className="flex items-center gap-10">
              <button className="bg-blue-500 px-8 py-3 rounded-lg font-bold hover:bg-blue-300 duration-200 hover:scale-90 duration-150">
                Login
              </button>
              <h3 className="text-red-500 font-bold"><a href="">FORGET PASSWORD?</a></h3>
            </div>
            <div className=" flex gap-10 items-center">
              <h2 className="mx-4 mt-5 font-bold ">Login With</h2>
              <FaFacebook className="text-2xl hover:text-blue-400 duration-200 cursor-pointer" />
              <FaGoogle className="text-2xl hover:text-blue-400 duration-200 cursor-pointer" />
              <FaTwitter className="text-2xl hover:text-blue-400 duration-200 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
