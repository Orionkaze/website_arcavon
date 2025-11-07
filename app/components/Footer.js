"use client";
import React from "react";
import Link from "next/link";
import { Michroma } from "next/font/google";
import { Youtube, Instagram, Linkedin } from "lucide-react"; // keep lucide for these
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faXTwitter } from "@fortawesome/free-brands-svg-icons"; // ✅ X & Discord from FontAwesome

const michroma = Michroma({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-michroma",
});

export default function Footer() {
  return (
    <footer className="bg-linear-to-r from-black via-[#020a12] to-[#031524] text-gray-300 border-t border-blue-900/30 py-10 px-6 md:px-16 backdrop-blur-md">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Section */}
        <div>
          <h2 className={`text-2xl font-bold text-blue-400 ${michroma.className}`}>
            ARCAVON
          </h2>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            Crafting immersive worlds and next-gen gaming experiences.
            Join us on our journey beyond reality.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-blue-400 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Home", href: "#home" },
              { name: "Services", href: "#services" },
              { name: "About", href: "#about" },
              { name: "Games", href: "#games" },
              { name: "Contact", href: "#contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Section */}
        <div>
          <h3 className="text-lg font-semibold text-blue-400 mb-3">Follow Us</h3>
          <div className="flex gap-5 mb-4">
            <Link
              href="https://youtube.com"
              target="_blank"
              className="hover:text-red-500 transition-colors duration-300"
            >
              <Youtube size={22} />
            </Link>

            <Link
              href="https://www.instagram.com/arcavon.official/#"
              target="_blank"
              className="hover:text-pink-500 transition-colors duration-300"
            >
              <Instagram size={22} />
            </Link>

            <Link
              href="https://www.linkedin.com/company/arcavon/"
              target="_blank"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              <Linkedin size={22} />
            </Link>

            <Link
              href="https://discord.gg/SNnhUUsjj"
              target="_blank"
              className="hover:text-indigo-500 transition-colors duration-300"
              aria-label="Discord"
            >
              <FontAwesomeIcon icon={faDiscord} size="lg" />
            </Link>

            <Link
              href="https://x.com"
              target="_blank"
              className="hover:text-white transition-colors duration-300"
              aria-label="X (formerly Twitter)"
            >
              <FontAwesomeIcon icon={faXTwitter} size="lg" />
            </Link>
          </div>

          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Arcavon Studios. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Made with 💙 by the Arcavon Team.
          </p>
        </div>
      </div>
    </footer>
  );
}
