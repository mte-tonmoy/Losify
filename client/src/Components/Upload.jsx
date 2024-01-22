import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import axios from "axios";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const Upload = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };


  const handleAddToyData = async (event) => {
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
      imageUrl,
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
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Item added successfully",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/item')
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

          <div className="form-control hidden">
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
            <span className="label-text">Description</span>
          </label>
          <textarea
            name="description"
            className="textarea textarea-bordered"
            placeholder="Write the toy description"
          ></textarea>
        </div>

        <div className="form-control mt-8 mb-16">
          <input
            className="btn btn-primary btn-block text-white"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default Upload;

