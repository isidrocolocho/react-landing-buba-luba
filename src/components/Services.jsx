import React from "react";

const Services = () => {
  // Lista de servicios con imágenes y descripciones
  const services = [
    { imgSrc: "./Bubbleimages/bubble1.png", title: "Lorem, ipsum dolor." },
    { imgSrc: "./Bubbleimages/bubble2.png", title: "Lorem, ipsum dolor." },
    { imgSrc: "./Bubbleimages/bubble3.png", title: "Lorem, ipsum dolor." },
    { imgSrc: "./Bubbleimages/bubble4.png", title: "Lorem, ipsum dolor." },
    { imgSrc: "./Bubbleimages/bubble7.png", title: "Lorem, ipsum dolor." },
    { imgSrc: "./Bubbleimages/bubble6.png", title: "Lorem, ipsum dolor." },
  ];

  return (
    <section
      id="services"
      className="flex flex-col items-center justify-center pt-10 px-6 pb-12 w-full font-raleway dark:text-white"
    >
      <div className="w-full flex items-center justify-center mb-10">
        <h1 className="text-3xl text-black dark:text-white font-medium">
          Do you want to try our flavors?
        </h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 w-full">
        {services.map((service, index) => (
          <div key={index} className="w-full py-6 px-6 mb-2">
            <div className="flex flex-col pt-5 items-center">
              <img src={service.imgSrc} className="w-21" alt={`Service ${index + 1}`} />
              <div>
                <h2>{service.title}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
