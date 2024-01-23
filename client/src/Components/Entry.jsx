import React, { useContext, useEffect, useState } from "react";
import Lottie from "lottie-react";
import authentications from "../assets/authentications";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'
import axios from "axios";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const Entry = () => {
  const [allToys, setAllToys] = useState([]);
  const [item, setItem] = useState(null);
  const { user } = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://server-tau-teal.vercel.app/allitem")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  });

  useEffect(() => {
    const findItem = allToys.find(item => item._id === id)
    setItem(findItem)
  }, [allToys])

  // console.log(item)
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  // console.log(image)
  const authentication = async (event) => {
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
    const user_name = form.user_name.value;
    const user_email = user?.email;
    const contact = form.contact.value;
    const item_name = form.item_name.value;
    const inside = form.inside.value;
    const size = form.size.value;
    const brand = form.brand.value;
    const itemcolor = form.itemcolor.value;
    const description = form.description.value;
    const status = "Pending";
    const finder_name = item?.userName;
    const finder_email = item?.userEmail;
    const finder_contact = item?.phoneNum;
    const itemId = id;

    const itemData = {
      user_name,
      user_email,
      contact,
      item_name,
      inside,
      size,
      brand,
      description,
      finder_name,
      finder_email,
      finder_contact,
      itemId,
      status,
      itemcolor,
      imageUrl
    };
    console.log(itemData);

    fetch("https://server-tau-teal.vercel.app/requestData", {
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
            title: "Successfully Requested",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/item')
        }
      });
  };


  return (
    <div>

      <div className="hero min-h-screen bg-white">
        <div className="hero-content flex-col lg:flex-row">
          <Lottie className="w-3/4" animationData={authentications} loop={true} />
          <div>

            <form onSubmit={authentication}>
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Lost Item Claim Form
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Certify that all information stated in this form is authentic and completed to the best knowledge.
                  </p>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        User Name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="user_name"
                          id="first-name"
                          autoComplete="given-name"
                          defaultValue={user?.displayName}
                          className="block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        User Email
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="user_email"
                          id="last-name"
                          autoComplete="family-name"
                          defaultValue={user?.email}
                          className="block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Contact Number
                      </label>
                      <div className="mt-2">
                        <input
                          name="contact"
                          type="number"
                          placeholder="Enter your number"
                          className="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>


                    <div className="sm:col-span-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Item Name
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="item_name"
                          type="text"
                          autoComplete="email"
                          defaultValue={item?.itemName}
                          className="block w-full pl-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    {/* here input the image */}

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

                    <div className="col-span-full">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        What was inside the item?
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="inside"
                          id="street-address"
                          autoComplete="street-address"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-5"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2 sm:col-start-1">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Item Color
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="itemcolor"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Item Size
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="size"
                          autoComplete="address-level1"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Brand/ Make
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="brand"
                          id="postal-code"
                          autoComplete="postal-code"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Write a few sentences description about your items.
                </p>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>



    </div>
  );
};
export default Entry;
