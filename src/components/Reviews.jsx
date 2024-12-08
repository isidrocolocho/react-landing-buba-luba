import React from "react";

const Reviews = () => {
  // Información de los productos
  const reviews = [
    {
      imgSrc: "./Bubbleimages/bubbletaro.jfif",
      title: "Lorem, ipsum dolor.",
      price: "$125",
      buttonText: "Order now",
    },
    {
      imgSrc: "./Bubbleimages/bubble matcha.jfif",
      title: "Lorem, ipsum dolor.",
      price: "$125",
      buttonText: "Order now",
    },
    {
      imgSrc: "./Bubbleimages/bubble caramel.jfif",
      title: "Lorem, ipsum dolor.",
      price: "$125",
      buttonText: "Order now",
    },
    {
      imgSrc: "./Bubbleimages/bubbletaro.jfif",
      title: "Lorem, ipsum dolor.",
      price: "$125",
      buttonText: "Order now",
    },
    {
      imgSrc: "./Bubbleimages/bubblefresa.jfif",
      title: "Lorem, ipsum dolor.",
      price: "$125",
      buttonText: "Order now",
    },
  ];

  return (
    <section id="reviews" className="flex flex-col items-center justify-center pt-10 px-6 pb-12 w-full font-raleway">
      <div className="w-full flex items-center justify-center mb-10">
        <h1 className="text-xl sm:text-3xl text-black dark:text-white font-medium space-x-14">
          <span>Flavors</span>
          <span>Places</span>
          <span>Prices</span>
        </h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="w-full bg-white border border-1 py-2 pb-5 px-6 mb-2"
          >
            <div className="flex flex-col pt-3 items-center space-y-3">
              <img src={review.imgSrc} className="w-21" alt={review.title} />

              <h2 className="font-bold">{review.title}</h2>
              <p className="text-green-800 font-bold">{review.price}</p>
              <button className="py-2 px-3 mt-3 hover:bg-black rounded-lg bg-[#F2A7D0] hover:bg-opacity-30">
                {review.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
