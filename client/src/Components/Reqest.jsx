import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const Reqest = () => {
  const [item, setItem] = useState([])
  const [myItem, setMyItem] = useState([])
  const { user } = useContext(AuthContext);
  const email = user?.email;
  useEffect(() => {
    fetch('https://server-dbqzrqfon-elite3.vercel.app/requestData')
      .then(res => res.json())
      .then(item => setItem(item))
  }, [])

  useEffect(() => {
    const filtermydata = item.filter(items => items.user_email === email)
    setMyItem(filtermydata)
  }, [item, email])

  const handleDeleteItem = (item) => {

    console.log(item._id)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        // pass the item object as a property of the config object
        axios.delete(`https://server-dbqzrqfon-elite3.vercel.app/requestData/${item._id}`, { data: item })
          // .then(res=>res.json())
          .then(data => {
            // console.log(data.data);
            if (data.data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your Item has been deleted.',
                'success'
              )
              const remaininng = myItem.filter(items => items._id != item?._id)
              setMyItem(remaininng)
            }
          })

      }
    })
  }
  return (
    <div className="min-h-screen">

      {
        myItem.length > 0 ? <div className="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
        {
          myItem.map(item => <div key={item._id} className="card card-compact w-96 h-[18rem] bg-base-100 shadow-xl ">
            <figure>
              <img
                src=""
                alt=""
              />
            </figure>
            <div className="card-body ">
              <h2 className="card-title text-gray-700">Requester</h2>
              <p className="font-bold text-gray-700">Item Name    : {item?.item_name}</p>
              <p className="font-bold text-gray-700">Requested To : {item?.finder_name}</p>
              <p className="font-bold text-gray-700">Email : {item?.finder_email}</p>
              <p className="font-bold text-gray-700">Conatact : {item?.finder_contact}</p>

              <div className="card-actions justify-end">
                <button onClick={() => handleDeleteItem(item)} className="btn bg-[#d33] text-white hover:bg-green-700">Cancel Request</button>
              </div>
            </div>
          </div>)
        }
      </div>

      :

      <h1 className='text-2xl font-semibold text-center mt-12 text-gray-700'>You have not requested any items yet</h1>
      }

      


    </div>
  );
};

export default Reqest;
