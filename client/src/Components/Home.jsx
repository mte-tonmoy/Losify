import React, { useEffect } from 'react';
import { FireIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";
import {CheckBadgeIcon } from '@heroicons/react/24/solid'
import { BeakerIcon } from '@heroicons/react/24/solid'
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <div>
      <div className='content-center'>

        <div className=" flex items-center justify-evenly min-h-[80vh] flex-col lg:flex-row">
          <figure><img src="https://www.lostify.com/assets/images/bg/banner-01.png" alt="Album" /></figure>
          <div className="card-body">
            <h1 className="card-title text-5xl text-primary">Lost something? </h1>
            <h1 className='card-title text-5xl text-primary'>Find it here…</h1>
            <p className='text-justify my-5 text-gray-700'>Welcome to the new online depository for missing items and people. Lostify’s global platform makes it easy to find what – or whoever –you’ve lost.</p>
            <div className="card-actions justify-end">

              <Link to='signup'> <button className="btn btn-primary text-white">Sign up now, its free!</button></Link>
            </div>

          </div>
        </div>
        <div className="flex justify-between items-center flex-col lg:flex-row mb-32 mt-8">

          <video className="h-2/5 w-full lg:w-2/5 rounded-lg" controls autoPlay muted>
            <source src="https://lostify.com/assets/ad_.mp4" type="video/mp4" />
          </video>


          <div className="card w-full bg-base-100 shadow-2xl mx-5 p-10 ">
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


      <div>
        <div className="card my-10 w-full mt-8">
          <figure><img src="https://www.lostify.com/assets/images/bg/banner-03.png" alt="car!" /></figure>
          <div className="card-body">
            <h2 className="card-title text-center">Hate that sinking feeling when you realize you’ve lost something? Us too!</h2>
            <p className='text-justify'>We spend hours, days – even years – searching high and low through the pockets of our clothing and drawers of our homes, tracing back our footsteps and asking around the area – yet often we never again find what we’ve lost.</p>
            <div className="card-actions justify-end">

            </div>
          </div>
        </div>

        <div className="card my-10 w-full bg-base-100 shadow-2xl">
          <div className="card-body">
            <h2 className="card-title">We have a vision: to reunite the world! </h2>
            <p className='text-justify'>And so, we created Lostify to help you find that elusive reunion. While we cannot guarantee that you’ll find what you seek, we can say with confidence that our ever-growing, compassionate global community will do all we can to give your search a happy ending.

              On Lostify, you can report and find:</p>
            <div className="card-actions justify-end my-10">
              <button className="btn">
                Personals
                <CheckBadgeIcon className="h-6 w-6 text-green-500" />
              </button>
              <button className="btn">
                Phones
                <CheckBadgeIcon className="h-6 w-6 text-green-500" />
              </button>
              <button className="btn">
                Documents
                <CheckBadgeIcon className="h-6 w-6 text-green-500" />
              </button>
              <button className="btn">
                Accessories
                <CheckBadgeIcon className="h-6 w-6 text-green-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>



  );

};

export default Home;


