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
    <div className="relative min-h-screen w-full overflow-x-hidden bg-black text-white">
      {/* ================= HEADER / NAVIGATION OVERLAY ================= */}
      <Header />

      {/* ===== HERO SECTION ===== */}
      <section
        className="relative flex min-h-[280px] w-full flex-col bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/tour/hero-background.jpg')",
        }}
      >
        {/* Dark overlay to match live site */}
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />
      </section>

      {/* ===== TOURS SECTION ===== */}
      <section className="w-full bg-black px-6 py-10 md:px-12 lg:px-[45px]">
        {/* ROW 1: Tours Heading / Wood Sign */}
        <div className="mb-10">
          <Image
            src="/tour/tours_sign_real.png"
            alt="Tours"
            width={172}
            height={70}
            className="w-[140px] md:w-[172px] h-auto object-contain"
          />
        </div>

        {/* Row 1 Tour Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 mb-16">
          {/* Card 1: GHK */}
          <div className="flex flex-col items-center">
            <div className="group relative w-full overflow-hidden rounded-[4px] shadow-[0_0_10px_rgba(0,0,0,0.5)]">
              <Image
                src="/tour/ghk_new.png"
                alt="Gilgit-Hunza-Khunjerab"
                width={400}
                height={400}
                className="h-[353px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mt-3 text-center text-[16px] font-bold text-white tracking-wider" style={{fontFamily: "'Oswald', sans-serif"}}>
              Gilgit-Hunza-Khunjerab
            </p>
          </div>

          {/* Card 2: SKS */}
          <div className="flex flex-col items-center">
            <div className="group relative w-full overflow-hidden rounded-[4px] shadow-[0_0_10px_rgba(0,0,0,0.5)]">
              <Image
                src="/tour/sks_new.png"
                alt="Skardu-Khaplu-Shigar"
                width={400}
                height={400}
                className="h-[353px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mt-3 text-center text-[16px] font-bold text-white tracking-wider" style={{fontFamily: "'Oswald', sans-serif"}}>
              Skardu-Khaplu-Shigar
            </p>
          </div>

          {/* Card 3: GYP */}
          <div className="flex flex-col items-center">
            <div className="group relative w-full overflow-hidden rounded-[4px] shadow-[0_0_10px_rgba(0,0,0,0.5)]">
              <Image
                src="/tour/gyp_new.png"
                alt="Gilgit-Yasin-Phandar"
                width={400}
                height={400}
                className="h-[353px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mt-3 text-center text-[16px] font-bold text-white tracking-wider" style={{fontFamily: "'Oswald', sans-serif"}}>
              Gilgit-Yasin-Phandar
            </p>
          </div>

          {/* Card 4: SKC */}
          <div className="flex flex-col items-center">
            <div className="group relative w-full overflow-hidden rounded-[4px] shadow-[0_0_10px_rgba(0,0,0,0.5)]">
              <Image
                src="/tour/skc_new.png"
                alt="Swat-Kalash-Chitral"
                width={400}
                height={400}
                className="h-[353px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mt-3 text-center text-[16px] font-bold text-white tracking-wider" style={{fontFamily: "'Oswald', sans-serif"}}>
              Swat-Kalash-Chitral
            </p>
          </div>
        </div>

        {/* ROW 2: + Add Heading / Wood Sign */}
        <div className="mb-10">
          <Image
            src="/tour/add_sign_real.png"
            alt="+ Add"
            width={172}
            height={70}
            className="w-[140px] md:w-[172px] h-auto object-contain"
          />
        </div>

        {/* Row 2 Tour Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Card 5: FM */}
          <div className="flex flex-col items-center">
            <div className="group relative w-full overflow-hidden rounded-[4px] shadow-[0_0_10px_rgba(0,0,0,0.5)]">
              <Image
                src="/tour/fm.jpg"
                alt="Fairy Meadows"
                width={400}
                height={400}
                className="h-[353px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mt-3 text-center text-[16px] font-bold text-white tracking-wider" style={{fontFamily: "'Oswald', sans-serif"}}>
              Fairy Meadows
            </p>
          </div>

          {/* Card 6: YAH */}
          <div className="flex flex-col items-center">
            <div className="group relative w-full overflow-hidden rounded-[4px] shadow-[0_0_10px_rgba(0,0,0,0.5)]">
              <Image
                src="/tour/yah.jpg"
                alt="Yasin - Astore - Hunza"
                width={400}
                height={400}
                className="h-[353px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mt-3 text-center text-[16px] font-bold text-white tracking-wider" style={{fontFamily: "'Oswald', sans-serif"}}>
              Yasin - Astore - Hunza
            </p>
          </div>

          {/* Card 7: BMS */}
          <div className="flex flex-col items-center">
            <div className="group relative w-full overflow-hidden rounded-[4px] shadow-[0_0_10px_rgba(0,0,0,0.5)]">
              <Image
                src="/tour/bms.jpg"
                alt="Babusar - Naran - Shogran"
                width={400}
                height={400}
                className="h-[353px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mt-3 text-center text-[16px] font-bold text-white tracking-wider" style={{fontFamily: "'Oswald', sans-serif"}}>
              Babusar - Naran - Shogran
            </p>
          </div>

          {/* Card 8: DA */}
          <div className="flex flex-col items-center">
            <div className="group relative w-full overflow-hidden rounded-[4px] shadow-[0_0_10px_rgba(0,0,0,0.5)]">
              <Image
                src="/tour/da.jpg"
                alt="Deosai & Astore"
                width={400}
                height={400}
                className="h-[353px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mt-3 text-center text-[16px] font-bold text-white tracking-wider" style={{fontFamily: "'Oswald', sans-serif"}}>
              Deosai & Astore
            </p>
          </div>
        </div>
      </section>

      {/* ===== SPACER ===== */}
      <section className="w-full bg-black p-2.5">
        <div className="mx-auto h-[50px] w-full max-w-[1140px]" />
      </section>

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
}
