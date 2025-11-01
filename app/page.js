"use client";
import Navbar from "./components/Navbar";
import ButtonRotatingBackgroundGradient from "./components/Button";
import { Michroma } from 'next/font/google'


const michroma = Michroma({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-michroma',
});


export default function Home() {
  return (
    <>
      <div className={`bg-gray-950 text-white overflow-hidden`}>
        <Navbar />

        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-start text-left mt-12 px-10">
          {/* Background Video */}
          <video
            src="/arcavon.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />

          {/* Fade at bottom */}
          <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-gray-950 to-transparent" />

          {/* Hero Text */}
          <div className="relative z-10 max-w-3xl">
            <h1 className={`text-5xl font-bold mb-6 ${michroma.className}`}>Enter Arcavon — Where Imagination Becomes a Battlefield</h1>
            <p className="text-lg text-gray-200 mb-8">
              We forge immersive worlds, electrify gameplay, and engineer the next era of interactive entertainment. Power up, because the future of gaming starts here.
            </p>

            <div className="flex gap-6">
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

        {/* Next Section */}
        <section className="py-20 px-6 bg-gray-950">
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <p className="max-w-3xl text-gray-300">
            Arcavon is dedicated to building innovative digital experiences that empower
            businesses and creators. We focus on design, performance, and impact.
          </p>
        </section>
      </div>
    </>
  );
}
