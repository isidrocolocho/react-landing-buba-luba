import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-[#594A45] dark:bg-dark-maron text-white py-6 px-6">
      <div className="grid grid-cols-4 gap-4 space-x-20">
        <div className="flex flex-col text-2xl pb-4 pt-5 cursor-pointer">
          <a className="flex flex-col items-center">
            <img
              src="./Bubbleimages/cafe-removebg-preview.png"
              className="w-[150px] p-3"
              alt="Logo"
            />
          </a>
          <div className="flex flex-row items-center justify-center">
            <i className="fa-brands fa-facebook p-3"></i>
            <i className="fa-brands fa-instagram p-3"></i>
            <i className="fa-brands fa-whatsapp p-3"></i>
          </div>
        </div>
        <div className="flex flex-col text-md pt-5 pb-4 cursor-pointer font-raleway space-y-1">
          <a className="flex flex-col items-start justify-start">
            <p className="font-bold">Follow us</p>
          </a>
          <a className="flex flex-col items-start justify-start">
            <p>Facebook</p>
          </a>
          <a className="flex flex-col items-start justify-start">
            <p>Twitter</p>
          </a>
          <a className="flex flex-col items-start justify-start">
            <p>Instagram</p>
          </a>
        </div>

        <div className="flex flex-col text-md pt-5 pb-4 cursor-pointer font-raleway space-y-1">
          <a className="flex flex-col items-start justify-start">
            <p className="font-bold">Contact info</p>
          </a>
          <a className="flex flex-col items-start justify-start">
            <p className="break-words">contacinfo@gmail.com</p>
          </a>
          <a className="flex flex-col items-start justify-start">
            <p>+503 87989898</p>
          </a>
          <a className="flex flex-col items-start justify-start">
            <p>1234 street name, city, country</p>
          </a>
        </div>
        <div className="flex flex-col text-md pt-5 pb-4 cursor-pointer font-raleway space-y-1">
          <a
            className="flex flex-col items-start justify-start hover:text-[#594eff]"
            href="#"
          >
            <p className="font-bold">Navigation</p>
          </a>
          <a
            className="flex flex-col items-start justify-start hover:text-[#594eff]"
            href="#"
          >
            <p>Home</p>
          </a>
          <a
            className="flex flex-col items-start justify-start hover:text-[#594eff]"
            href="#services"
          >
            <p>Services</p>
          </a>
          <a
            className="flex flex-col items-start justify-start hover:text-[#594eff]"
            href="#about"
          >
            <p>About us</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
