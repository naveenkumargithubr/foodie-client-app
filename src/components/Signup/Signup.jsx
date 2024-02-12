import React, { useContext, useState } from "react";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Modal from "../Modal/Modal";
import { AuthContext } from "../../Context/AuthProvider";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //context
  const { signUpWithGmail, createUser } = useContext(AuthContext);
  const [errorMsg, setErrorMsg] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  // create new account using email and password
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    createUser(email, password)
      .then((result) => {
        //signed up
        const user = result.user;
        console.log(user);
        alert("Account created succesfully!");
        document.getElementById("my_modal_5").close();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMsg = error.message;
        const setErrorMsg = "Enter valid email and password";
      });
  };

  //signup with gmail
  const handleLogin = () => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user;
        alert("login successfully!");
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        const errorMsg = error.message;
        setErrorMsg("gmail login failed");
      });
  };

  return (
    <div className="max-w-md bg-white shadow w-full mx-auto my-20 flex justify-center items-center p-10 rounded-xl">
      <div className="modal-action flex flex-col justify-center mt-0">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body"
          method="dialog"
        >
          {/* <Link
            to="/"
            htmlFor="my_modal_5"
            onClick={() => document.getElementById("my_modal_5").close()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link> */}
          <h3 className="font-bold text-lg text-[#1e293b]">Create Account!</h3>
          <div className="form-control">
            {/* email */}
            <label className="label">
              <span className="label-text text-[#1e293b]">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered bg-none"
              required
              {...register("email")}
            />
          </div>
          {/* password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#1e293b]">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered bg-none"
              required
              {...register("password")}
            />
            <label className="label">
              <a
                href="#"
                className="label-text-alt link link-hover text-[#475569] mt-1"
              >
                Forgot password?
              </a>
            </label>
          </div>
          {/* login button */}
          <div className="form-control mt-6">
            <input
              type="submit"
              value="Sign up"
              className="btn bg-green text-white border-none"
            />
          </div>
          {/* signup link */}
          <p className="text-center my-2 text-[#3f3f46]">
            If you have an account please{" "}
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="underline text-[#3b82f6]"
            >
              Login Now
            </button>
          </p>
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>
        </form>
        {/* social signin btns */}
        <div className="flex items-center justify-center  gap-6 ">
          <button
            className="btn btn-circle text-[#f1f5f9] border-none bg-[#7dd3fc] hover:text-white"
            onClick={handleLogin}
          >
            <FaGoogle />
          </button>
          <button className="btn btn-circle text-[#f1f5f9] border-none bg-[#7dd3fc] hover:text-white">
            <FaFacebookF />
          </button>
          <button className="btn btn-circle text-[#f1f5f9] border-none bg-[#7dd3fc] hover:text-white">
            <FaTwitter />
          </button>
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default Signup;
