import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Upload = () => {
  const { user } = useContext(AuthContext);

  const handleAddToyData = (event) => {
    event.preventDefault();
    const form = event.target;
    const itemName = form.toyName.value;
    const userName = user?.displayName;
    const userEmail = user?.email;
    const photoUrl = form.photoUrl.value;
    const category = form.category.value;
    const phoneNum = form.phoneNum.value;
    const description = form.description.value;

    const itemData = {
      itemName,
      userName,
      userEmail,
      photoUrl,
      category,
      phoneNum,
      description,
    };
    console.log(itemData);

    fetch("https://server-tau-teal.vercel.app/additem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(itemData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Item add successfully");
        }
      });
  };

  return (
    <div>
      <h2 className="text-center text-3xl my-5">Add new Item </h2>
      <form onSubmit={handleAddToyData}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Item Name</span>
            </label>
            <input
              type="text"
              name="toyName"
              placeholder="Item name"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              name="sellerName"
              placeholder="User name"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <input
              type="text"
              name="sellerEmail"
              defaultValue={user?.email}
              placeholder="email"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Picture URL of Item</span>
            </label>
            <input
              type="text"
              name="photoUrl"
              defaultValue=""
              placeholder="picture url"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select name="category" className="select select-bordered">
              <option>Found Item</option>
              <option>Lost Item</option>
              
            </select>
          </div>
          
          
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="text"
              name="phoneNum"
              defaultValue=""
              placeholder="Phone Number"
              className="input input-bordered"
            />
          </div>
        </div>

        <div className="form-control mt-5">
          <label className="label">
            <span className="label-text">Toy description</span>
          </label>
          <textarea
            name="description"
            className="textarea textarea-bordered"
            placeholder="Write the toy description"
          ></textarea>
        </div>

        <div className="form-control mt-8 mb-16">
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default Upload;










// import React from 'react';
// import Lottie from "lottie-react";
// import upload from "../assets/upload.json";

// const Upload = () => {
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
//       <button className="btn btn-primary text-white">Submit</button>
//     </div>
//   </form>
// </div>
// <div className='card'>
// <Lottie animationData={upload} loop={true} />

// </div>
// </div> 
// </div>
//     </div>
// );
// };

// export default Upload;