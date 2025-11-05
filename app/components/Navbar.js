"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Michroma } from "next/font/google";

const michroma = Michroma({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-michroma",
});

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-linear-to-r from-black via-[#020a12] to-[#031524] text-white shadow-lg z-50 py-3 px-8 backdrop-blur-md border-b border-blue-900/30">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className={`flex items-center gap-3 text-2xl font-bold tracking-wider text-blue-400 ${michroma.className}`}>
          <Image src="/wtf.png" alt="Arcavon Logo" width={55} height={55} priority />
          <span className="text-white">ARCAVON</span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {[
            { name: "Home", href: "#home" },
            { name: "Services", href: "#services" },
            { name: "About", href: "#about" },
            { name: "Games", href: "#games" },
            { name: "Contact", href: "#contact" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 relative group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Button */}
        <div className="hidden md:block">
          <button className="px-4 py-2 rounded-md bg-blue-500/10 border border-blue-700/40 text-blue-300 hover:bg-blue-600/20 transition-all text-sm font-semibold">
            Join Us
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className="text-blue-400 hover:text-blue-300 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            > 
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}