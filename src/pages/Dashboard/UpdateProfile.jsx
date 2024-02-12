import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //submit the update profile form data
  const onSubmit = (data) => {
    const name = data.name;
    const photoURL = data.photoURL;
    updateUserProfile(name, photoURL)
      .then(() => {
        //profile updated
        alert("profile updated");
      })
      .catch((error) => {
        //An error occured
      });
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center hero min-h-screen bg-base-200">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="font-bold">Update Your Profile</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="Your name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Upload photo</span>
            </label>

            <input
              type="text"
              {...register("photoURL")}
              placeholder="photoURL"
              className="input input-bordered"
              required
            />
            {/* ToDo uploading will be later */}
            {/* <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            /> */}
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn bg-green text-white">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
