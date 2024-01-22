import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { signIn, googlePopup, setUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");
  console.log("login page location", location);
  const from = location.state?.from?.pathname || "/item";

  // console.log(user.emailVerified)

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
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
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img
            className="rounded-lg"
            src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg?w=826&t=st=1684625992~exp=1684626592~hmac=9e2465ba6bb86e3ffc74a2e161518fc7732bc0b23e8e1d62c6d67bdbe9149d92"
            alt=""
          />
        </div>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Login</h1>
            <form onSubmit={handleLogin}>
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
                  <span className="label-text">Password</span>
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
                  className="btn text-white bg-primary my-btn"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="text-center">or</p>
            <div className="text-center">
              <button
                onClick={handleGoogleSignIn}
                type="button"
                class="btn my-btn bg-primary"
              >
                <FaGoogle
                  style={{ fontSize: "1.5rem" }}
                  className="me-2 text-white"
                ></FaGoogle>
                <p className="text-white">Sign in with Google</p>
              </button>
            </div>
            <p className="my-4 text-center">
              {" "}
              <Link className="text-primary font-bold" to="/signup">
                Sign Up
              </Link>
            </p>
            <p className="text-red-500">{error}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

// import React from 'react';
// import Lottie from "lottie-react";
// import animation from "../assets/animation.json";

// const Login = () => {
//     return (
//         <div>
//         <div className="hero min-h-screen ">
// <div className="hero-content flex-col lg:flex-row-reverse">
// <div className="text-center lg:text-left">
// <form className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//   <div className="form-control">
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
//       <button className="btn btn-primary text-white">LogIn</button>
//     </div>
//   </form>
// </div>
// {/* <div className="w-70  h-70  lg:w-4/5 lg:ml-auto vh-[10%] sm:vh-[10%]"> */}
// <div className='card'>
// <h1 className="text-5xl font-bold text-primary">LogIn</h1>

// <Lottie animationData={animation} loop={true} />;

// </div>
// </div>
// </div>
//     </div>
// );
// };
// export default Login;
