import Swal from "sweetalert2";

import { Link } from "react-router-dom";
import edit from "../assets/edit.svg"
import deletedicon from "../assets/delete.svg"
import axios from "axios";


const ManageItems = ({ myItem, setMyItem }) => {

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
                axios.delete(`http://localhost:5000/allitem/${item._id}`, { data: item })
                    // .then(res=>res.json())
                    .then(data => {
                        // console.log(data.data);
                        if (data.data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your food has been deleted.',
                                'success'
                            )
                            setMyItem(myItem)
                        }
                    })

            }
        })
    }
    return (
        <div className="w-full">


            <div className="bg-white p-12 rounded-xl">
                <div>
                    <h2 className="text-black text-[2rem] font-bold cin">Total Items {myItem.length}</h2>
                </div>

                <div className="overflow-x-auto mt-8 rounded-tl-2xl rounded-tr-2xl">
                    <table className="table w-full rounded-tl-2xl rounded-tr-2xl">
                        {/* head */}
                        <thead className="bg-primary h-[4.5rem] rounded-tl-2xl rounded-tr-2xl text-white font-semibold">
                            <tr>
                                <th>

                                </th>
                                <th>Image</th>
                                <th>Item Name</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                myItem.map((item, index) => <tr key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.photoUrl} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {item.itemName}

                                    </td>
                                    <td>
                                        <Link to={`/updateitem/${item._id}`}> <button className="btn w-[3.1rem] h-[3.1rem] rounded-md bg-primary btn-neutral border-none btn-xs"><img src={edit} alt="" /></button></Link>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteItem(item)} className="btn w-[3.1rem] text-red-800 h-[3.1rem] rounded-md bg-[#d33] btn-neutral border-none btn-xs"><img src={deletedicon} alt="" /></button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    );
};

export default ManageItems;
