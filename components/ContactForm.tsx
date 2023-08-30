"use client";
import { contactUs } from "@/services/index";
import React, { useState } from "react";

const ContactForm = () => {
  const [contactFormValue, setContactFormValue] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event: any) => {
    setContactFormValue({
      ...contactFormValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    //console.log(contactFormValue);
    const resp = await contactUs(contactFormValue);
    //console.log(resp);
  };
  return (
    <div>
      <form>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered"
            name="name"
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email Address</span>
          </label>
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered"
            name="email"
            onChange={handleChange}
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea
            className="mb-6 textarea textarea-bordered"
            placeholder="Send a message..."
            name="message"
            onChange={handleChange}
            rows={3}
          ></textarea>{" "}
        </div>

        <button
          type="button"
          data-te-ripple-init
          data-te-ripple-color="light"
          className="mb-6 inline-block w-full rounded bg-blue-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          onClick={handleSubmit}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
