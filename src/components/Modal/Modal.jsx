import React, { useContext, useState } from "react";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider";
const Modal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signUpWithGmail, login } = useContext(AuthContext);
  const [errorMsg, setErrorMsg] = useState("");
  //when user logged in then navigate to home page or admin page
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  // for submitting the login data
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    // console.log(email, password);
    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        alert("Login successfull!");
        document.getElementById("my_modal_5").close();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMsg = error.message;
        setErrorMsg("Provide a correct email and password");
      });
  };

  //signup with gmail
  const handleLogin = () => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user;
        alert("Login successfull!");
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  return (
    <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
      <div className="modal-box bg-white">
        <div className="modal-action flex flex-col justify-center mt-0">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body"
            method="dialog"
          >
            <h3 className="font-bold text-lg text-[#1e293b]">Please Login!</h3>
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
                value="Login"
                className="btn bg-green text-white"
              />
            </div>
            {errorMsg ? (
              <p className="text-center text-red text-md italic">{errorMsg}</p>
            ) : (
              ""
            )}
            {/* signup link */}
            <p className="text-center my-2 text-[#3f3f46]">
              Dont you have an account please{" "}
              <Link to="/signup" className="underline text-[#3b82f6]">
                Signup Now
              </Link>
            </p>

            <button
              htmlFor="my_modal_5"
              onClick={() => document.getElementById("my_modal_5").close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
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
      </div>
    </dialog>
  );
};

export default Modal;
