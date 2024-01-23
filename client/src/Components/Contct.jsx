import React, { useEffect, useRef} from 'react';
import emailjs from '@emailjs/browser';

const Contct = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs.sendForm('service_iyikmif', 'template_swfcjuo', form.current, '2R1aN_RXxNyo3j1Ym')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
    }

  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-primary">Contact Us</h1>
            <p className="py-6 text-justify text-gray-600">We’re a super friendly bunch and here to help you out with any query you may have. No question is too small, so don’t be shy! Just get in touch using the contact form below and one of our fantastic support team will get back to you as soon as possible.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" ref={form} onSubmit={sendEmail}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" name="user_name" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="user_email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea placeholder="Message" name="message" className="input input-bordered" required />
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
