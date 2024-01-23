import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const RequestDetails = () => {
    const [item, setItem] = useState([])
    const [myItem, setMyItem] = useState([])
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const email = user?.email;
    useEffect(() => {
        fetch('https://server-tau-teal.vercel.app/requestData')
            .then(res => res.json())
            .then(item => setItem(item))
    }, [])

    useEffect(() => {
        const filtermydata = item.filter(items => items?.itemId === id)
        setMyItem(filtermydata)
    }, [item, email])

    console.log(myItem)
    return (
       <div className='min-h-screen'>

        {
          myItem.length > 0 ? <div className="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
          {
            myItem.map(item => <div key={item._id} className="card card-compact w-96 bg-base-100 shadow-xl ">
              <figure>
                <img
                  src=""
                  alt=""
                />
              </figure>
              <div className="card-body ">
                <h2 className="card-title text-gray-700">Request By</h2>
                <img src={item?.imageUrl} alt="" />
                <p className="font-bold text-gray-700 text-center mb-4">Item Previous Photo</p>
  
                <p className="font-bold text-gray-700">Item Name    : {item?.item_name}</p>
                <p className="font-bold text-gray-700">Requested By : {item?.user_name}</p>
                <p className="font-bold text-gray-700">Email : {item?.user_email}</p>
                <p className="font-bold text-gray-700">Conatact : {item?.contact}</p>
                <p className="font-bold text-green-700 text-xl">Item Information</p>
  
                <p className="font-bold text-gray-700">Brand : {item?.brand}</p>
                <p className="font-bold text-gray-700">Inside Item : {item?.inside}</p>
                <p className="font-bold text-gray-700">Item Size : {item?.size}</p>
                <p className="font-bold text-gray-700">Item Color : {item?.itemcolor}</p>
                <p className="font-bold text-gray-700">Item Description : {item?.description}</p>
  
                
    
                
              </div>
            </div>)
          }
        </div>

        :
        <h1 className='text-2xl font-semibold text-center mt-12 text-gray-700'>Nobody Requested</h1>
        }
         
       </div>
    );
};

export default RequestDetails;