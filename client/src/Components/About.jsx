import React from 'react';
import {CheckBadgeIcon } from '@heroicons/react/24/solid'
import { BeakerIcon } from '@heroicons/react/24/solid'

const About = () => {
    return (
        <div>
           <div className="card my-10 w-full">
  <figure><img src="https://www.lostify.com/assets/images/bg/banner-03.png" alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title text-center">Hate that sinking feeling when you realize you’ve lost something? Us too!</h2>
    <p className='text-justify'>We spend hours, days – even years – searching high and low through the pockets of our clothing and drawers of our homes, tracing back our footsteps and asking around the area – yet often we never again find what we’ve lost.</p>
    <div className="card-actions justify-end">
    
    </div>
  </div>
</div>

<div className="card my-10 w-full bg-base-100 shadow-2xl">
  <div className="card-body">
    <h2 className="card-title">We have a vision: to reunite the world! ></h2>
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
    );
};

export default About;