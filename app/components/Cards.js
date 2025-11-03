"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardData from "../Data/CardData";


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

export default function Cards() {
  const [activeCard, setActiveCard] = useState(null);
  const [canHover, setCanHover] = useState(true);

  // Detect if the user agent supports hover (mouse). If not, use tap behavior.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(hover: hover)");
    const setHover = () => setCanHover(Boolean(mq.matches));
    setHover();
    // Some browsers fire change events when capabilities change (rare), so listen
    if (mq.addEventListener) {
      mq.addEventListener("change", setHover);
      return () => mq.removeEventListener("change", setHover);
    } else if (mq.addListener) {
      mq.addListener(setHover);
      return () => mq.removeListener(setHover);
    }
  }, []);

  const handleCardTap = (id) => {
    // If the device supports hover, don't toggle on click — hover will handle it.
    if (canHover) return;
    setActiveCard((prev) => (prev === id ? null : id));
  };

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
        breakpoint: 1280,
        settings: { slidesToShow: 2, centerPadding: "100px" },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, centerPadding: "80px" },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, centerPadding: "60px" },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, centerPadding: "20px" },
      },
    ],
  };

  return (
    <div className="relative w-full px-6 sm:px-8 py-10 sm:py-16">
      <Slider {...settings}>
        {CardData.map((card) => {
          const isActive = activeCard === card.id;

          return (
            <div key={card.id} className="px-3 sm:px-4">
              <div
                role="button"
                tabIndex={0}
                aria-pressed={isActive}
                onClick={() => handleCardTap(card.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") handleCardTap(card.id);
                }}
                className="relative w-64 sm:w-72 h-100 mx-auto rounded-tl-3xl rounded-br-3xl border overflow-hidden shadow-lg transition-transform duration-500 ease-in-out cursor-pointer group focus:outline-none"
              >
                {/* Image Wrapper for hover scale */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.name}
                    className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                      canHover ? "group-hover:scale-105" : isActive ? "scale-105" : ""
                    }`}
                    draggable={false}
                  />
                </div>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent transition-opacity duration-700 ease-out" />

                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-4 text-white z-10 flex flex-col">
                  {/* NAME — slides up on hover/tap */}
                  <h3
                    className={`text-2xl font-extrabold transform transition-transform duration-700 ease-out ${
                      canHover
                        ? "translate-y-20 group-hover:-translate-y-3"
                        : isActive
                        ? "-translate-y-3"
                        : "translate-y-20"
                    }`}
                  >
                    {card.name}
                  </h3>

                  {/* DESCRIPTION — fades in and slides up on hover/tap */}
                  <p
                    className={`text-sm text-gray-200 transform transition-all duration-700 ease-out ${
                      canHover
                        ? "opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0"
                        : isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-full"
                    }`}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}