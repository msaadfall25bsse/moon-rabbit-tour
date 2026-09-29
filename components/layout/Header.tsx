"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 flex flex-col items-center pt-[30px] sm:pt-[38px]">
      {/* Right Corner Mobile Menu Toggle (matching real site) */}
      <div className="absolute right-6 top-6 sm:hidden z-50">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white hover:text-[#ff4a52] transition-colors p-2 focus:outline-none"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* LOGO CONTAINER */}
      <div className="flex flex-col items-center justify-center pb-0 mb-[-10px] z-20">
        <Link href="/" className="inline-block transition-transform hover:scale-[1.02] duration-300">
          <Image
            src="/logo.png"
            alt="Moon Rabbit"
            width={200}
            height={202}
            priority
            className="w-[170px] sm:w-[200px] h-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
          />
        </Link>
      </div>

      {/* DESKTOP NAVIGATION MENU */}
      <nav className="hidden sm:flex items-center justify-center mt-0.5 sm:mt-0.5 z-30">
        <ul className="flex items-center space-x-[22px] md:space-x-[30px] text-[13px] tracking-[0.2px] font-medium">
          <li>
            <Link
              href="/"
              className="text-white hover:text-[#ff4a52] transition-colors duration-200 py-2 inline-block border-b-2 border-transparent hover:border-[#ff4a52]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-white hover:text-[#ff4a52] transition-colors duration-200 py-2 inline-block"
            >
              Tours
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-white hover:text-[#ff4a52] transition-colors duration-200 py-2 inline-block"
            >
              Vehicles
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-white hover:text-[#ff4a52] transition-colors duration-200 py-2 inline-block"
            >
              Accommodations
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-white hover:text-[#ff4a52] transition-colors duration-200 py-2 inline-block"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-[#FFD700] hover:text-[#ddb36a] transition-colors duration-200 py-2 inline-block font-semibold"
            >
              Mining
            </Link>
          </li>
        </ul>
      </nav>

      {/* MOBILE SLIDE-DOWN MENU */}
      {mobileMenuOpen && (
        <div className="sm:hidden w-full bg-black/95 backdrop-blur-md border-b border-white/10 px-6 py-6 mt-4 transition-all">
          <ul className="flex flex-col space-y-4 text-center text-sm font-medium">
            <li>
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-white hover:text-[#ff4a52] transition-colors py-1"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-white hover:text-[#ff4a52] transition-colors py-1"
              >
                Tours
              </Link>
            </li>
            <li>
              <Link
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-white hover:text-[#ff4a52] transition-colors py-1"
              >
                Vehicles
              </Link>
            </li>
            <li>
              <Link
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-white hover:text-[#ff4a52] transition-colors py-1"
              >
                Accommodations
              </Link>
            </li>
            <li>
              <Link
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-white hover:text-[#ff4a52] transition-colors py-1"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[#FFD700] hover:text-[#ddb36a] transition-colors py-1 font-semibold"
              >
                Mining
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
