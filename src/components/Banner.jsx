import React from "react";

const Banner = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-40 md:mt-20 sm:mt-40 bg-[#FEDFDD] dark:bg-dark-rosa dark:text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#000000] dark:text-white">
        <div className="flex flex-col justify-center items-center pt-8 mx-10 lg:mx-40">
          <h1 className="font-dancing text-center text-4xl pb-4">Bubble Tea</h1>
          <p className="text-center text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sed sit doloremque, cumque excepturi
            recusandae tempore, similique dolorum ab magnam dicta obcaecati pariatur nihil error voluptates animi
            doloribus dolore rem?
          </p>
        </div>
        <div className="w-full mt-2 flex justify-center items-center">
          <img
            src="./Bubbleimages/Boba_Tea-removebg-preview.png"
            className="w-full"
            alt="Bubble Tea"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
