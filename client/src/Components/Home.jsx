import React from 'react';
import {FireIcon } from '@heroicons/react/24/solid'

const Home = () => {
    return (
        <div className='content-center'>

    <div className="card lg:card-side content-center">
    <figure><img src="https://www.lostify.com/assets/images/bg/banner-01.png" alt="Album"/></figure>
    <div className="card-body">
        <h1 className="card-title text-5xl text-primary">Lost something? </h1>
        <h1 className='card-title text-5xl text-primary'>Find it here…</h1>
        <p className='text-justify my-5 text-gray-700'>Welcome to the new online depository for missing items and people. Lostify’s global platform makes it easy to find what – or whoever –you’ve lost.</p>
        <div className="card-actions justify-end">
          
        <button className="btn btn-primary text-white">Sign up now, its free!</button>
        </div>
       
    </div>
    </div>
    <div className="card card-side">
  
    <video className="h-2/5 w-2/5 rounded-lg" controls autoPlay muted>
      <source src="https://lostify.com/assets/ad_.mp4" type="video/mp4" />
    </video>


  <div className="card w-full bg-base-100 shadow-2xl mx-5 p-10">
    <h2 className="card-title text-primary text-2xl font-bold">What's Lostify?</h2>
    <p className='text-justify my-5 text-gray-700'>From valuables like wallets and keys to long-lost family members and dear old friends – life can sure feel empty until you’re reunited with what you miss. With Lostify, your overdue reunion may be just around the corner.</p>
    <div className="card-actions justify-end">
    <button className="btn">
  Lost Something
  <FireIcon className="h-6 w-6 text-red-500" />
</button>
<button className="btn">
  Found Something
  <FireIcon className="h-6 w-6 text-red-500" />
</button>
    </div>
    
    
  </div>
  
</div>
       </div>



    );
    
};

export default Home;


