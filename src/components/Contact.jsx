import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center bg-[#E0DE91] dark:bg-dark-rosas dark:text-white"
    >
      <div className="grid grid-cols-3 gap-4 text-[#594A45] dark:text-white">
        <div className="w-full mt-2 grid-cols-1 justify-center items-center">
          <img
            src="./Bubbleimages/tarobubbletea-removebg-preview.png"
            className="w-full"
            alt="Tee"
          />
        </div>

        <div className="flex flex-col justify-center items-center pt-8 pb-10 grid-cols-2 col-span-1">
          <h1 className="font-bold text-center text-2xl pb-4">
            Join us and get 15% off!
          </h1>
          <p className="text-center text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sed sit
            doloremque,
          </p>
          <div className="grid rid-cols-1 lg:grid-cols-3 items-center justify-center">
            <input
              type="text"
              placeholder="Email address"
              className="py-2 px-3 mt-3 rounded-lg border border-2 border-[#594A45] text-white hover:bg-opacity-30 lg:col-span-2 lg:mr-1"
            />
            <button className="py-2 px-3 mt-3 hover:bg-black rounded-lg bg-[#594A45] border border-2 border-[#594A45] text-white hover:bg-opacity-30">
              Subscribe
            </button>
          </div>
        </div>

        <div className="w-full mt-2 grid-cols-1 justify-center items-center">
          <img
            src="./Bubbleimages/coffeebubbletea-removebg-preview.png"
            className="w-full"
            alt="Tee"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
