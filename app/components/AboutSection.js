"use client";
import Image from "next/image";
import { Gamepad2, Users, Sparkles } from "lucide-react";
import { Michroma } from "next/font/google";

const michroma = Michroma({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-michroma",
});

export default function AboutSection() {
  return (
    <section className="bg-black text-gray-300 py-12 px-6 md:px-12 relative overflow-hidden">
     

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side Image */}
        <div className="flex justify-center md:justify-start ">
          <div className="rounded-2xl overflow-hidden shadow-lg shadow-blue-700/50 flex flex-col items-center p-4 bg-linear-to-b from-[#0b3d91]/20 to-transparent border border-blue-800/40">
            <Image
              src="/wtf.png" // replace this with your image path
              alt="Game Development Team"
              width={400}
              height={400}
              className="rounded-2xl hover:scale-105 transition-transform duration-500"
            />
            <h3 className={`text-3xl transform -translate-y-5 ${michroma.className}`}>ACRAVON</h3>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="space-y-6">
          <h1 className={`text-3xl md:text-4xl font-bold text-white leading-tight ${michroma.className}`}>
            We Create <span className="text-blue-500">Worlds That Play Back</span>
          </h1>
          <p className="text-gray-400 leading-relaxed">
            We’re a team of developers, storytellers, and designers crafting immersive
            experiences that stick in your mind long after you log off. Our passion?
            Building games that blend art, technology, and fun into unforgettable adventures.
          </p>

          {/* Info Cards */}
          <div className="grid sm:grid-cols-2 gap-6 pt-6">
            {/* Card 1 */}
            <div className="bg-linear-to-b from-[#0b3d91]/20 to-transparent border border-blue-800/40 p-6 rounded-2xl shadow-lg hover:shadow-blue-700/40 transition-shadow duration-300">
              <Gamepad2 className="text-blue-400 w-10 h-10 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Immersive Games</h3>
              <p className="text-gray-400 text-sm">
                We build captivating worlds and gameplay that challenge, inspire, and entertain.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-linear-to-b from-[#0b3d91]/20 to-transparent border border-blue-800/40 p-6 rounded-2xl shadow-lg hover:shadow-blue-700/40 transition-shadow duration-300">
              <Users className="text-blue-400 w-10 h-10 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Collaborative Spirit</h3>
              <p className="text-gray-400 text-sm">
                We love teaming up with creators, artists, and developers to bring fresh ideas to life.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-linear-to-b from-[#0b3d91]/20 to-transparent border border-blue-800/40 p-6 rounded-2xl shadow-lg hover:shadow-blue-700/40 transition-shadow duration-300 sm:col-span-2">
              <Sparkles className="text-blue-400 w-10 h-10 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Endless Creativity</h3>
              <p className="text-gray-400 text-sm">
                Every idea starts as a spark. We turn that spark into a fully playable, beautifully designed reality.
              </p>
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
}
