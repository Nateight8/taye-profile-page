import React from "react";
import Button from "./Button";

const Contact = () => {
  return (
    <main className="h-screen w-full  my-48 text-[#dee9e9] flex flex-col-reverse justify-around  items-center mx-auto md:w-[70%] md:flex-row px-6">
      <div className="form  md:w-96 ">
        <h3 className="text-4xl my-4">Get in touch</h3>
        <p className="text-xl font-light mb-4">
          I will love to hear from you lorem ipsum text content to encourage
          users to talk about how they fell about the community{" "}
        </p>
        <form className="">
          <div className="flex flex-col  mb-6 space-y-4">
            <label htmlFor="contact" className="text-lg py-3 ">
              Name or Alias
            </label>
            <input
              id="contact"
              type="text"
              className="text-lg py-2 pl-2 shadow-2xl bg-[#036369] hover:shadow-lg focus:outline-none focus:shadow-md  transition-all duration-700 ease-in-out "
              placeholder="Name"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-lg py-3">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="text-lg py-2 pl-2 shadow-2xl bg-[#036369] hover:shadow-lg focus:outline-none focus:shadow-md  transition-all duration-700 ease-in-out "
              placeholder="Message"
            />
          </div>
          <Button cta="submit" />
        </form>
      </div>
      <div className="contact md:w-[560px]">
        <h2 className="text-6xl md:text-7xl mb-14 capitalize font-bold">
          let us create something <br /> great
        </h2>
      </div>
    </main>
  );
};

export default Contact;
