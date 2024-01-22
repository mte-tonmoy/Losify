import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import ManageItems from './ManageItems';

const ManageDataTable = () => {
    const [item, setItem] = useState([])
    const [myItem, setMyItem] = useState([])
    const { user } = useContext(AuthContext);
    const email = user?.email;
    useEffect(() => {
        fetch('http://localhost:5000/allitem')
            .then(res => res.json())
            .then(item => setItem(item))
    }, [])

    

    useEffect(()=>{
        const filtermydata = item.filter(items=>items.userEmail===email)
        setMyItem(filtermydata)
    },[item, email])

    return (
        <div className='mx-auto w-[80vw] rounded-lg min-h-screen'>
            {
                myItem.length === 0 ? <div className="flex justify-center flex-col items-center mt-24">
                    <h1 className="text-3xl font-bold">You have not added any Item yet</h1>
                    {/* <Lottie className="w-[30vw] rounded-md" loop={true} animationData={login} />; */}
                </div>
                    :

                    <div className=''><ManageItems myItem={myItem} setMyItem={setMyItem}></ManageItems></div>
            }
        </div>
    );
};

export default ManageDataTable;