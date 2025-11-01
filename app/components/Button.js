"use client";
import React from "react";
import { Michroma } from 'next/font/google'


const michroma = Michroma({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-michroma',
});

const ButtonRotatingBackgroundGradient = ({
  children,
  onClick,
  variant = "default", // "default" | "hero"
}) => {
  const variants = {
    default:
      "bg-gray-950 backdrop-blur-3xl transition-colors duration-200 ease-out group-hover:text-cyan-300",
    hero:
      "bg-gradient-to-t from-cyan-400 via-blue-500 to-cyan-500 text-white font-semibold shadow-[0_0_25px_rgba(0,191,255,0.4)] transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-[0_0_35px_rgba(0,191,255,0.6)]",
  };

  return (
    <button
      onClick={onClick}
      className={`relative inline-flex h-14 overflow-hidden rounded-tl-xl rounded-br-xl p-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black group ${michroma.className}`}
    >
      {/* Rotating Gradient Border */}
      <span className="absolute inset-[-150%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#06b6d4_0%,#3b82f6_50%,#06b6d4_100%)] rounded-tl-xl rounded-br-xl pointer-events-none" />

      {/* Glow overlay */}
      <span className="absolute inset-0 rounded-tl-xl rounded-br-xl bg-linear-to-r from-cyan-400 via-blue-400 to-cyan-400 opacity-20 scale-95 transition-all duration-500 group-hover:opacity-40 group-hover:scale-105 blur-lg pointer-events-none" />

      {/* Button content */}
      <span
        className={`relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-tl-lg rounded-br-lg px-10 py-3 text-base font-medium ${variants[variant]} ${
          variant === "hero" ? "group-hover:animate-gradient" : ""
        }`}
      >
        {children}
      </span>
    </button>
  );
};

export default ButtonRotatingBackgroundGradient;
