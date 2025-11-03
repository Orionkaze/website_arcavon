"use client";
import React from "react";
import CardData from "../Data/CardData";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom arrow components
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full cursor-pointer"
    onClick={onClick}
  >
    <ChevronRight size={28} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full cursor-pointer"
    onClick={onClick}
  >
    <ChevronLeft size={28} />
  </div>
);

const Cards = () => {
  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "120px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "60px",
        },
      },
    ],
  };

  return (
    <div className="relative w-full px-8 py-16">
      <Slider {...settings}>
        {CardData.map((card) => (
          <div key={card.id} className="px-4">
            <div className="relative w-64 h-96 mx-auto rounded-tl-3xl rounded-br-3xl border overflow-hidden shadow-lg transition-transform duration-500 ease-in-out cursor-pointer group">
              {/* Image Wrapper for hover scale */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={card.img}
                  alt={card.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0  to-transparent transition-opacity duration-700 ease-out" />

              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-4 text-white z-10 flex flex-col bg-linear-to-t from-black via-black/50">
                <h3 className="text-2xl font-extrabold transform translate-y-20 transition-transform duration-700 ease-out group-hover:-translate-y-3">
                  {card.name}
                </h3>
                <p className="text-sm text-gray-200 opacity-0 transform translate-y-full transition-all duration-700 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Cards;
