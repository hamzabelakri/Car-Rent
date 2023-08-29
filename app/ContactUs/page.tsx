import Image from "@/node_modules/next/image";
import React from "react";

const ContactUs = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
      <Image src='/hero.png'
            alt='hero'
            width={400}
            height={500}
            className='w-full object-cover align-middle max-w-md'
            />
        <div className="card flex-shrink-0 w-full max-w-xl  bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="username"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>

              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered "
                placeholder="Enter your message..."
                rows={4}
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
