import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-[#594A45] dark:bg-dark-maron text-white py-6 px-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {/* Logo e iconos de redes sociales */}
    <div className="flex flex-col items-center text-center pb-4 pt-5">
      <a>
        <img
          src="./Bubbleimages/cafe-removebg-preview.png"
          className="w-[150px] p-3"
          alt="Logo"
        />
      </a>
      <div className="flex space-x-3">
        <i className="fa-brands fa-facebook p-3 text-2xl"></i>
        <i className="fa-brands fa-instagram p-3 text-2xl"></i>
        <i className="fa-brands fa-whatsapp p-3 text-2xl"></i>
      </div>
    </div>

    {/* Sección de "Follow us" */}
    <div className="flex flex-col text-md space-y-1">
      <p className="font-bold">Follow us</p>
      <a href="#" className="hover:text-[#594eff]">Facebook</a>
      <a href="#" className="hover:text-[#594eff]">Twitter</a>
      <a href="#" className="hover:text-[#594eff]">Instagram</a>
    </div>

    {/* Sección de "Contact info" */}
    <div className="flex flex-col text-md space-y-1">
      <p className="font-bold">Contact info</p>
      <p className="break-words">contacinfo@gmail.com</p>
      <p>+503 87989898</p>
      <p>1234 street name, city, country</p>
    </div>

    {/* Sección de "Navigation" */}
    <div className="flex flex-col text-md space-y-1">
      <p className="font-bold">Navigation</p>
      <a href="#" className="hover:text-[#594eff]">Home</a>
      <a href="#services" className="hover:text-[#594eff]">Services</a>
      <a href="#about" className="hover:text-[#594eff]">About us</a>
    </div>
  </div>
</footer>

  );
};

export default Footer;
