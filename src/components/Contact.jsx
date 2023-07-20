import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      {" "}
      <h1 className="py-4 text-4xl font-bold text-center text-[#26a157]">
        Contact
      </h1>
      <form
        action="https://getform.io/f/56069834-067f-41e3-8e9e-5d766ecbc725"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2"> Name</label>
            <input
              type="text"
              name="name"
              className="border-2 rounded-lg p-3 flex border-gray-300"
            ></input>
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2"> Phone</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="phone"
            ></input>
          </div>
          <div className="flex flex-col p-2">
            <label className="uppercase text-sm py-2"> Email</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="email"
              name="email"
            ></input>
          </div>
          <div className="flex flex-col p-2">
            <label className="uppercase text-sm py-2"> Subject</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="subject"
            ></input>
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2" l>
              Message
            </label>
            <textarea
              className="border-2 rounded-lg p-3 border-gray-300"
              rows="10"
              name="message"
            ></textarea>
          </div>
          <button className="bg-[#26a157] text-gray-100 mt-4 p-4 rounded-lg w-full">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
