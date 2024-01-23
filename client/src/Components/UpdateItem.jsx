import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'
import { useNavigate, useParams } from "react-router-dom";

const UpdateItem = () => {
    const { user } = useContext(AuthContext);
    const [allToys, setAllToys] = useState([]);
    const [item, setItem] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();


    useEffect(() => {
        fetch("https://server-tau-teal.vercel.app/allitem")
            .then((res) => res.json())
            .then((data) => setAllToys(data));
    });

    useEffect(() => {
        const findItem = allToys.find(item => item._id === id)
        setItem(findItem)
    }, [allToys])

    //   console.log(item)


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

        fetch(`https://server-tau-teal.vercel.app/allitem/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(itemData)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);

                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Item Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    navigate('/manage')
                }
            })
    };

    return (
        <div>
            <h2 className="text-center text-3xl my-5 text-gray-800">Upadate Item Details</h2>
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
                            defaultValue={item?.itemName}
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={item?.userName}
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
                            defaultValue={item?.userEmail}
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
                            placeholder="picture url"
                            className="input input-bordered"
                            defaultValue={item?.photoUrl}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select name="category" className="select select-bordered" defaultValue={item?.category}>
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
                            defaultValue={item?.phoneNum}
                            placeholder="Phone Number"
                            className="input input-bordered"

                        />
                    </div>
                </div>

                <div className="form-control mt-5">
                    <label className="label">
                        <span className="label-text">Item description</span>
                    </label>
                    <textarea
                        name="description"
                        className="textarea textarea-bordered"
                        placeholder="Write the toy description"
                        defaultValue={item?.description}
                    ></textarea>
                </div>

                <div className="form-control mt-8 mb-16">
                    <input
                        className="btn btn-primary btn-block text-white"
                        type="submit"
                        value="Update"
                    />
                </div>
            </form>
        </div>
    );
};

export default UpdateItem;

