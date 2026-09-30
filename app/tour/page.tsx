import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Tours - Moon Rabbit",
  description: "Moon Rabbit Guided Tours",
};

export default function TourPage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-black text-white">
      {/* ===== HERO SECTION ===== */}
      <section
        className="relative flex min-h-[315px] w-full flex-col bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/tour/hero-background.jpg')",
        }}
      >
        {/* Dark overlay not needed as per screenshot, the background is bright enough */}
        
        {/* HEADER OVERLAY (Logo + Nav) positioned inside the notebook area */}
        <div className="absolute top-0 left-0 w-full z-50 flex flex-col items-center pt-[50px] sm:pt-[70px]">
          
          <Link href="/" className="inline-block transition-transform hover:scale-[1.02] duration-300">
            <Image
              src="/logo.png"
              alt="Moon Rabbit"
              width={200}
              height={200}
              priority
              className="w-[150px] sm:w-[180px] h-auto object-contain drop-shadow-xl"
            />
          </Link>
          
          {/* DESKTOP NAVIGATION MENU */}
          <nav className="hidden sm:flex items-center justify-center mt-6 z-30">
            <ul className="flex items-center space-x-[20px] md:space-x-[30px] text-[15px] font-semibold tracking-wide">
              <li>
                <Link
                  href="/"
                  className="text-white hover:text-[#ff4a52] transition-colors duration-200 py-2 inline-block drop-shadow-md"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/tour"
                  className="text-white hover:text-[#ff4a52] transition-colors duration-200 py-2 inline-block drop-shadow-md"
                >
                  Tours
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-[#ff4a52] transition-colors duration-200 py-2 inline-block drop-shadow-md"
                >
                  Vehicles
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-[#ff4a52] transition-colors duration-200 py-2 inline-block drop-shadow-md"
                >
                  Accommodations
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-[#ff4a52] transition-colors duration-200 py-2 inline-block drop-shadow-md"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#FFD700] hover:text-[#ddb36a] transition-colors duration-200 py-2 inline-block drop-shadow-md"
                >
                  Mining
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      {/* ===== TOURS SECTION ===== */}
      <section className="w-full bg-black px-6 py-10 md:px-12 lg:px-[45px]">
        {/* Tours Heading / Wood Sign */}
        <div className="mb-10">
          <Image
            src="/tour/tours-sign.png"
            alt="Tours"
            width={172}
            height={70}
            className="w-[140px] md:w-[172px] h-auto object-contain"
          />
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Card 1: GHK */}
          <div className="flex flex-col items-center">
            <div className="group relative w-full overflow-hidden rounded-[4px] shadow-[0_0_10px_rgba(0,0,0,0.5)]">
              <Image
                src="/tour/ghk.png"
                alt="Gilgit-Hunza-Khunjerab"
                width={400}
                height={400}
                className="h-[350px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors duration-300">
                <h3 className="text-[45px] lg:text-[50px] font-bold tracking-wider text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-sans" style={{fontFamily: "'Oswald', sans-serif"}}>
                  GHK
                </h3>
              </div>
            </div>
            <p className="mt-4 text-center text-[15px] font-bold text-white drop-shadow-md" style={{fontFamily: "'Oswald', sans-serif"}}>
              Gilgit-Hunza-Khunjerab
            </p>
          </div>

          {/* Card 2: SKS */}
          <div className="flex flex-col items-center">
            <div className="group relative w-full overflow-hidden rounded-[4px] shadow-[0_0_10px_rgba(0,0,0,0.5)]">
              <Image
                src="/tour/sks.png"
                alt="Skardu-Khaplu-Shigar"
                width={400}
                height={400}
                className="h-[350px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors duration-300">
                <h3 className="text-[45px] lg:text-[50px] font-bold tracking-wider text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-sans" style={{fontFamily: "'Oswald', sans-serif"}}>
                  SKS
                </h3>
              </div>
            </div>
            <p className="mt-4 text-center text-[15px] font-bold text-white drop-shadow-md" style={{fontFamily: "'Oswald', sans-serif"}}>
              Skardu-Khaplu-Shigar
            </p>
          </div>

          {/* Card 3: GYP */}
          <div className="flex flex-col items-center">
            <div className="group relative w-full overflow-hidden rounded-[4px] shadow-[0_0_10px_rgba(0,0,0,0.5)]">
              <Image
                src="/tour/gyp.png"
                alt="Gilgit-Yasin-Phandar"
                width={400}
                height={400}
                className="h-[350px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors duration-300">
                <h3 className="text-[45px] lg:text-[50px] font-bold tracking-wider text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-sans" style={{fontFamily: "'Oswald', sans-serif"}}>
                  GYP
                </h3>
              </div>
            </div>
            <p className="mt-4 text-center text-[15px] font-bold text-white drop-shadow-md" style={{fontFamily: "'Oswald', sans-serif"}}>
              Gilgit-Yasin-Phandar
            </p>
          </div>

          {/* Card 4: SKC */}
          <div className="flex flex-col items-center">
            <div className="group relative w-full overflow-hidden rounded-[4px] shadow-[0_0_10px_rgba(0,0,0,0.5)]">
              <Image
                src="/tour/skc.png"
                alt="Swat-Kalash-Chitral"
                width={400}
                height={400}
                className="h-[350px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors duration-300">
                <h3 className="text-[45px] lg:text-[50px] font-bold tracking-wider text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-sans" style={{fontFamily: "'Oswald', sans-serif"}}>
                  SKC
                </h3>
              </div>
            </div>
            <p className="mt-4 text-center text-[15px] font-bold text-white drop-shadow-md" style={{fontFamily: "'Oswald', sans-serif"}}>
              Swat-Kalash-Chitral
            </p>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
}
