import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AllItemRow from "./AllItemRow";
import { AuthContext } from "../../Provider/AuthProvider";
import loadinggif from "../assets/loading.gif"

const Item = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  const [allToys, setAllToys] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://server-tau-teal.vercel.app/allitem")
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
        setLoading(false)
      });
  });
  return (
    <div className="min-h-screen">
      <Link to="/upload">
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mx-5 my-5 bg-primary text-white">
          Post Item
        </button>
      </Link>
      {
        loading ? <img className="mx-auto" src={loadinggif} alt="loading" /> : <div>
        <h2 className="text-5xl my-8 text-gray-700 text-center">All Item Data</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center gap-10">
          {allToys.map((item) => (
            <div key={item?._id} className={"card h-full w-96 shadow-md my-8 relative"}>
              <figure className="rounded-xl">
                <img className="object-cover px-5  rounded-xl" src={item.imageUrl} alt="" />
              </figure>

              <div className=" px-5 pt-5  items-center ">
                
                  <p className="font-semibold text-gray-700">Category        : {item.category}</p>
                  <p className="font-semibold text-gray-700">Item Name        : {item.itemName}</p>
                  <p className="font-semibold text-gray-700">User Name        : {item.userName}</p>
                  <p className="font-semibold text-gray-700">User Email       : {item.userEmail}</p>
                  <p className="font-semibold text-gray-700">Phone Nubmer     : {item.phoneNum}</p>
                  <p className="font-semibold text-gray-700 mb-5">Item Description : {item.description}
                  </p>
                
                
              </div>
              <div className=" absolute bottom-0 right-5">
                  <Link to={`/entry/${item?._id}`}><button className="btn btn-active btn-primary text-white my-5">Request</button></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      }
      

      
    </div>
  );
};

export default Item;
