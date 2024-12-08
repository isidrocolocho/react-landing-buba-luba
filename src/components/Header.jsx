import React, { useEffect, useState } from "react";

const Header = () => {
  // Estado para manejar el modo oscuro
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <header className="text-gray-600 body-font bg-[#594A45] dark:bg-dark-maron font-raleway fixed top-0 left-0 right-0 w-full">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-3 p-4 items-center gap-4">
        
        <nav className="text-white font-bold flex flex-wrap items-center md:items-start justify-center md:justify-self-start space-x-4 text-sm md:col-span-2 lg:col-span-1">
          <a className="hover:text-[#594eff]" href="#">Home</a>
          <a className="hover:text-[#594eff]" href="#services">Services</a>
          <a className="hover:text-[#594eff]" href="#about">About us</a>
          <a className="hover:text-[#594eff]" href="#contact">Contact</a>
        </nav>

        
        <div className="flex justify-center items-center md:items-start md:justify-start lg:items-center lg:justify-center">
          <img src="./Bubbleimages/cafe-removebg-preview.png" className="w-20" alt="Logo" />
        </div>

        
        <div className="flex justify-center sm:justify-center md:justify-end lg:justify-end items-center space-x-4">
         
          <button
            id="btn-darkmode"
            onClick={toggleDarkMode}
            className="py-2 px-4 hover:bg-[#594eff] rounded-lg text-white font-bold text-2xl"
          >
            <i className={`fa-regular ${isDarkMode ? "fa-sun" : "fa-moon"}`} />
          </button>

          <button className="inline-flex items-center border-2 border-white rounded-lg dark:bg-dark-indigos text-white font-bold border-0 py-2 px-4 focus:outline-none hover:bg-[#594eff] text-sm">
            Buy now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
