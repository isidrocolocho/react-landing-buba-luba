import React from "react";

const About = () => {
  // Información para las secciones
  const aboutSections = [
    {
      bgColor: "bg-[#F2A7D0] dark:bg-[#E0DE91]",
      textColor: "bg-[#E0DE91] dark:bg-[#F2A7D0]",
      heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      description: "Lorem ipsum",
      imgSrc: "./Bubbleimages/bubble8.png",
      buttonText: "Order now",
    },
    {
      bgColor: "bg-[#E0DE91] dark:bg-[#F2A7D0]",
      textColor: "bg-[#F2A7D0] dark:bg-[#E0DE91]",
      heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      description: "Lorem ipsum",
      imgSrc: "./Bubbleimages/bubble9.png",
      buttonText: "Order now",
    },
  ];

  return (
    <section id="about" className="flex flex-col text-black h-full font-raleway">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 w-full">
        {aboutSections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col ${section.bgColor} w-full p-5 grid grid-cols-3`}
          >
            <div className="flex flex-col items-start justify-start col-span-2 p-10 space-y-8">
              <h1 className="text-2xl">{section.heading}</h1>
              <p>{section.description}</p>
              <button
                className={`py-2 px-3 mt-3 ${section.textColor} hover:bg-black rounded-lg hover:bg-opacity-30`}
              >
                {section.buttonText}
              </button>
            </div>
            <img
              src={section.imgSrc}
              className="w-full pt-4 justify-end items-end"
              alt={`About section ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
