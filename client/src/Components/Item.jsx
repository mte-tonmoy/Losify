import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AllItemRow from "./AllItemRow";

const Item = () => {
  const [allToys, setAllToys] = useState([]);

  useEffect(() => {
    fetch("https://server-tau-teal.vercel.app/allitem")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  });
  return (
    <div>
      <Link to="/upload">
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mx-5 my-5 bg-primary text-white">
          Found Item
        </button>
      </Link>
      <Link to="/upload">
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg my-10 bg-primary text-white">
          Lost Item
        </button>
      </Link>

      <div>
        <h2 className="text-5xl my-8">All Item Data</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {allToys.map((item) => (
            <div className={"card w-96 shadow-xl"}>
              <figure>
                <img className="h-64" src={item.photoUrl} alt="" />
              </figure>

              <div className="card-body  items-center ">
                <div className="">
                  <p className="font-semibold">Category        : {item.category}</p>
                  <p className="font-semibold">Item Name        : {item.itemName}</p>
                  <p className="font-semibold">User Name        : {item.userName}</p>
                  <p className="font-semibold">User Email       : {item.userEmail}</p>
                  <p className="font-semibold">Phone Nubmer     : {item.phoneNum}</p>
                  <p className="font-semibold">Item Description : {item.description}
                  </p>
                  <Link to={`/entry/${item?._id}`}><button className="btn btn-active btn-primary text-white my-5">Request</button></Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* {allToys.map((allToy) => (
              <AllItemRow key={allToy._id} allToy={allToy}></AllItemRow>
            ))} */}
      </div>
    </div>
  );
};

export default Item;
