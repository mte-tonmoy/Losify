import React, { useEffect } from 'react';

const Contct = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-primary">Contact Us</h1>
            <p className="py-6 text-justify text-gray-600">We’re a super friendly bunch and here to help you out with any query you may have. No question is too small, so don’t be shy! Just get in touch using the contact form below and one of our fantastic support team will get back to you as soon as possible.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <input type="text" placeholder="Message" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-white">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contct;
