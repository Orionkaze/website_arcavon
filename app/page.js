"use client";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import ButtonRotatingBackgroundGradient from "./components/Button";
import AboutSection from "./components/AboutSection";
import { Michroma } from "next/font/google";

const michroma = Michroma({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-michroma",
});

export default function Home() {
  return (
    <>
      <div className="bg-black text-white overflow-hidden">
        <Navbar />

        {/* Hero Section */}
        <section className="relative flex flex-col justify-center text-left mt-12 px-4 sm:px-8 md:px-16 lg:px-20 h-[90vh] md:h-[92vh] overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
            <video
              src="/arcavon.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-center opacity-80 transition-all duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
          </div>

          {/* Hero Text */}
          <div className="relative z-10 max-w-5xl text-left space-y-6">
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold leading-snug ${michroma.className}`}
            >
              Enter Arcavon — Where Imagination Becomes a Battlefield
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
              We forge immersive worlds, electrify gameplay, and engineer the
              next era of interactive entertainment. Power up, because the
              future of gaming starts here.
            </p>

            <div className="flex flex-row sm:flex-row gap-4 sm:gap-6 pt-2">
              <ButtonRotatingBackgroundGradient
                variant="hero"
                onClick={() => alert("Get Started clicked!")}
              >
                Get Started
              </ButtonRotatingBackgroundGradient>
              <ButtonRotatingBackgroundGradient
                variant="default"
                onClick={() => alert("Learn More clicked!")}
              >
                Learn More
              </ButtonRotatingBackgroundGradient>
            </div>
          </div>
        </section>
      </div>

      {/* Portfolio Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-black text-center">
        
        <h3
          className={`text-base sm:text-xl md:text-4xl font-medium mb-12 text-gray-100 ${michroma.className}`}
        >
          Meet The Characters
        </h3>

        <div className="max-w-7xl mx-auto">
          <Cards />
        </div>
      </section>
      
      {/* About Us Section */}
      <section className="py-6 sm:py-10 px-2 sm:px-3 md:px-4 lg:px-6 bg-black text-center">
        <h3
          className={`text-base sm:text-xl md:text-4xl font-medium mb-12 text-gray-100 ${michroma.className}`}
        >
         About Us
        </h3>
        <AboutSection />

      </section>
    </>
  );
}
