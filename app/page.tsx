"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { MOUNTAINS_DATA } from "./mountains-data";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative min-h-screen w-full bg-black overflow-x-hidden text-white font-['Poppins',sans-serif]">
      {/* ================= HEADER / NAVIGATION OVERLAY ================= */}
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
                href="https://moonrabbit.pk/tour/"
                className="text-white hover:text-[#ff4a52] transition-colors duration-200 py-2 inline-block"
              >
                Tours
              </Link>
            </li>
            <li>
              <Link
                href="https://moonrabbit.pk/vehicles/"
                className="text-white hover:text-[#ff4a52] transition-colors duration-200 py-2 inline-block"
              >
                Vehicles
              </Link>
            </li>
            <li>
              <Link
                href="https://moonrabbit.pk/accommodation/"
                className="text-white hover:text-[#ff4a52] transition-colors duration-200 py-2 inline-block"
              >
                Accommodations
              </Link>
            </li>
            <li>
              <Link
                href="https://moonrabbit.pk/contact/"
                className="text-white hover:text-[#ff4a52] transition-colors duration-200 py-2 inline-block"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="https://moonrabbit.pk/mining/"
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
                  href="https://moonrabbit.pk/tour/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-white hover:text-[#ff4a52] transition-colors py-1"
                >
                  Tours
                </Link>
              </li>
              <li>
                <Link
                  href="https://moonrabbit.pk/vehicles/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-white hover:text-[#ff4a52] transition-colors py-1"
                >
                  Vehicles
                </Link>
              </li>
              <li>
                <Link
                  href="https://moonrabbit.pk/accommodation/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-white hover:text-[#ff4a52] transition-colors py-1"
                >
                  Accommodations
                </Link>
              </li>
              <li>
                <Link
                  href="https://moonrabbit.pk/contact/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-white hover:text-[#ff4a52] transition-colors py-1"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="https://moonrabbit.pk/mining/"
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

      {/* ================= HERO VIDEO SECTION ================= */}
      <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-black flex items-center justify-center">
        {/* Fullscreen Background Video with AutoPlay, Loop, Muted, Playsinline */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/moon-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        >
          <source src="/moon-720p.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Ambient Subtle Vignette / Overlay matching Revolution Slider / Elementor theme */}
        <div className="absolute inset-0 bg-black/15 pointer-events-none z-10" />

        {/* Bottom subtle gradient fade to blend smoothly */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none z-10" />
      </section>

      {/* ================= WHAT WE DO SECTION ================= */}
      <section
        className="relative w-full min-h-[450px] py-[70px] px-6 sm:px-12 md:px-16 lg:px-24 bg-cover bg-bottom bg-no-repeat flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/what-we-do-bg.jpg')",
        }}
      >
        {/* Dark overlay matching original: background-color: #0000008C */}
        <div className="absolute inset-0 bg-black/55 pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Left Column (Heading): ~38% width */}
          <div className="w-full md:w-[38%] flex items-center justify-center md:justify-center">
            <h2 className="font-['Oswald',sans-serif] text-[40px] sm:text-[45px] font-[200] leading-[1.2] text-[#FFFFFF] tracking-wide text-center md:text-left">
              What We Do
            </h2>
          </div>

          {/* Right Column (Text Content): ~61% width */}
          <div className="w-full md:w-[61%] font-['Oswald',sans-serif] text-[17px] sm:text-[18px] font-[300] leading-[1.65] text-[#FFFDFD] text-left md:text-justify space-y-4">
            <p className="py-[4px]">
              Moon Rabbit offers a unique Mystical Guided Tour through the bewildering scenery of Northern Pakistan. Our tour packages are all inclusive and only require a simple booking followed by your arrival to a local airport of your choice.
            </p>
            <p className="py-[4px]">
              Rest assured, from arrival till your departure Moon Rabbit will lavish you with hospitality while providing the following amenities: dependable 4×4 vehicles, boats, mountain bikes, and a variety of picturesque accommodations along with authentic cuisine from all of the best restaurants in the area.
            </p>
            <p className="py-[4px]">
              The Moon Rabbit Tour Guide is well-versed and during the journey he will provide all guests an interesting backstory regarding the people, culture, and history of the area focusing on esoteric knowledge transfer. We look forward to sharing a truly memorable life changing experience with you!
            </p>
          </div>
        </div>
      </section>

      {/* ================= THE MAJESTIC MOUNTAINS OF PAKISTAN SECTION ================= */}
      <section className="relative w-full bg-black py-14 sm:py-16 text-white overflow-hidden">
        {/* Section Heading matching Moon Rabbit: font-Oswald 45px font-300 */}
        <div className="w-full text-center px-4 mb-10 sm:mb-12">
          <h2 className="font-['Oswald',sans-serif] text-[34px] sm:text-[45px] font-[300] leading-[1.4] text-[#E9E9E9]">
            The Majestic Mountains of Pakistan
          </h2>
        </div>

        {/* Carousel Container with Arrows */}
        <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-8">
          {/* Left Arrow Button */}
          <button
            onClick={() => {
              if (carouselRef.current) {
                carouselRef.current.scrollBy({ left: -360, behavior: "smooth" });
              }
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/70 hover:bg-[#ff4a52] text-white flex items-center justify-center transition-all border border-white/20 shadow-lg"
            aria-label="Previous Mountain"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Mountain Cards Horizontal Scroll Slider */}
          <div
            ref={carouselRef}
            className="flex items-stretch gap-4 overflow-x-auto scrollbar-none scroll-smooth pb-6 px-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {MOUNTAINS_DATA.map((item) => (
              <Link
                key={item.id}
                href={`/mountains/${item.slug}`}
                className="group relative flex-shrink-0 w-[280px] sm:w-[300px] md:w-[310px] h-[360px] sm:h-[390px] rounded-lg overflow-hidden border border-white/10 bg-black cursor-pointer transition-transform duration-300 hover:scale-[1.02] shadow-2xl block"
              >
                {/* Background Image of Mountain */}
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 300px, 350px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Hover Reveal Overlay matching real website exactly */}
                <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center z-20">
                  <h3 className="font-['Georgia',serif] text-[#d6c2a1] text-[18px] sm:text-[20px] font-normal italic mb-3 leading-snug">
                    &ldquo;{item.name.replace(/^“|”$/g, '')}&rdquo;
                  </h3>

                  {item.heightMeters ? (
                    <div className="font-['Oswald',sans-serif] text-[15px] sm:text-[16px] font-[200] text-[#e6dcc8] space-y-1 tracking-wide">
                      <p>{item.heightMeters}</p>
                      <p>{item.heightFeet}</p>
                      <p className="text-zinc-400 mt-1">{item.range}</p>
                    </div>
                  ) : (
                    <p className="font-['Oswald',sans-serif] text-[14px] font-[200] text-zinc-300 leading-relaxed text-justify line-clamp-6">
                      {item.description}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={() => {
              if (carouselRef.current) {
                carouselRef.current.scrollBy({ left: 360, behavior: "smooth" });
              }
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/70 hover:bg-[#ff4a52] text-white flex items-center justify-center transition-all border border-white/20 shadow-lg"
            aria-label="Next Mountain"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}
