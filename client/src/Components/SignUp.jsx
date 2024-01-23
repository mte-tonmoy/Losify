import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const SignUp = () => {
  const { createUser, googlePopup } = useContext(AuthContext);
  const from = location.state?.from?.pathname || "/item";
  const [error, setError] = useState("");
  const [image, setImage] = useState(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };
  const navigate = useNavigate();
  const auth = getAuth();
  const handleSignUp = async (event) => {
    event.preventDefault();
    const form = event.target;
    const imageFile = new FormData();
    imageFile.append('image', image);

    const res = await axios.post(image_hosting_api, imageFile, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    const imageUrl = res.data.data.url;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password, photo);

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        updateUserData(name, photo);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });

    const updateUserData = (name, photo) => {
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: imageUrl,
      })
        .then(() => {
           console.log(user);
           navigate(from, { replace: true });
        })
        .catch((error) => {
          setError(error.massage);
        });
    };
    navigate(from, { replace: true });
  };

  const handleGoogleSignIn = () => {
    googlePopup()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img
            className="rounded-lg"
            src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?w=826&t=st=1684627759~exp=1684628359~hmac=e4b34eb57ea37b904653eac7965ed99eb0dcc74e857955e57405cb369d5e75aa"
            alt=""
          />
        </div>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold text-primary">Sign Up</h1>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control hidden">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo Url"
                  className="input input-bordered"
                />
              </div>




              <div className="mt-4">
                <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900">
                  Upload Image
                </label>
                <input required
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="mt-2"
                />
              </div>








              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary my-btn text-white"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="my-4 text-center">
              Already Have an Account?
              <Link className="text-blue-600 font-bold" to="/login">
                Login
              </Link>
            </p>
            <p className="text-red-500">{error}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;


// import React from 'react';
// import Lottie from "lottie-react";
// import signup from "../assets/signup.json";

// const SignUp = () => {
//     return (
//         <div>
//         <div className="hero min-h-screen ">
// <div className="hero-content flex-col lg:flex-row-reverse">
// <div className="text-center lg:text-left">
// <form className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//   <div className="form-control">
//       <label className="label">
//         <span className="label-text">Name</span>
//       </label>
//       <input type="text" placeholder="Name" className="input input-bordered" required />
//     </div>
//     <div className="form-control">
//       <label className="label">
//         <span className="label-text">Email</span>
//       </label>
//       <input type="email" placeholder="Email" className="input input-bordered" required />
//     </div>

//     <div className="form-control">
//       <label className="label">
//         <span className="label-text">Password</span>
//       </label>
//       <input type="password" placeholder="Password" className="input input-bordered" required />
//     </div>
//     <div className="form-control mt-6">
//       <button className="btn btn-primary text-white">SignUp</button>
//     </div>
//   </form>
// </div>
// <div className='card'>
// <Lottie animationData={signup} loop={true} />

// </div>
// </div>
// </div>
//     </div>
// );
// };
// export default SignUp;