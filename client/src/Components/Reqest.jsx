import React from "react";

const Reqest = () => {
  return (
    <div className="grid justify-center">
      <div className="card card-compact w-96 bg-base-100 shadow-xl ">
        <figure>
          <img
            src=""
            alt=""
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-gray-700">Requester</h2>
          <p className="font-bold text-gray-700">Item Name    :</p> 
          <p className="font-bold text-gray-700">Requested By :</p> 
          <p className="font-bold text-gray-700">Email :</p> 
          <p className="font-bold text-gray-700">Conatact :</p> 

          <div className="card-actions justify-end">
            <button className="btn bg-[#d33] text-white hover:bg-green-700">Pending</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reqest;
