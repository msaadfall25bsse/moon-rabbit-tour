import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Tours - Moon Rabbit",
  description: "Moon Rabbit Guided Tours",
};

export default function TourPage() {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-x-hidden text-white font-['Poppins',sans-serif]">
      {/* ===== GLOBAL HEADER ===== */}
      <Header />

      {/* ===== INNER PAGE HEADER BACKGROUND ===== */}
      <section className="relative w-full h-[280px] sm:h-[350px] overflow-hidden">
        {/* Background image (Map and Book) */}
        <Image
          src="/tour/header-bg.jpg"
          alt="Moon Rabbit Tours Header"
          fill
          priority
          className="object-cover object-center z-0"
        />
        {/* Dark overlay to make logo pop */}
        <div className="absolute inset-0 bg-black/50 pointer-events-none z-10" />
      </section>

      {/* ===== TOURS HERO & GRID SECTION ===== */}
      <section className="relative w-full bg-black py-12 px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="w-full max-w-[1240px] mx-auto">
          {/* Wooden Tours Sign */}
          <div className="mb-10 flex justify-start">
            <Image
              src="/tour/tours-sign.png"
              alt="Tours"
              width={250}
              height={100}
              className="w-[180px] sm:w-[220px] md:w-[250px] h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Tour Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* GHK Card */}
            <div className="relative group rounded-xl overflow-hidden cursor-pointer">
              <Image
                src="/tour/ghk.png"
                alt="GHK Tour"
                width={400}
                height={500}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            {/* SKS Card */}
            <div className="relative group rounded-xl overflow-hidden cursor-pointer">
              <Image
                src="/tour/sks.png"
                alt="SKS Tour"
                width={400}
                height={500}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* GYP Card */}
            <div className="relative group rounded-xl overflow-hidden cursor-pointer">
              <Image
                src="/tour/gyp.png"
                alt="GYP Tour"
                width={400}
                height={500}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* SKC Card */}
            <div className="relative group rounded-xl overflow-hidden cursor-pointer">
              <Image
                src="/tour/skc.png"
                alt="SKC Tour"
                width={400}
                height={500}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
}
