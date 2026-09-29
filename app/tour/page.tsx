import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Tours - Moon Rabbit",
  description:
    "Explore our mystical guided tours through the breathtaking scenery of Northern Pakistan.",
};

export default function TourPage() {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-x-hidden text-white font-['Poppins',sans-serif]">
      {/* ===== HEADER ===== */}
      <Header />

      {/* ===== HERO SECTION ===== */}
      <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-black flex items-center justify-center">
        {/* Background image */}
        <Image
          src="/image/tour/tour-hero-bg.jpg"
          alt="Moon Rabbit Tours"
          fill
          priority
          className="object-cover object-center z-0"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45 pointer-events-none z-10" />

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none z-10" />

        {/* Hero text image overlay */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-6">
          <Image
            src="/image/tour/tour-hero-text.png"
            alt="Tours"
            width={700}
            height={300}
            priority
            className="w-[280px] sm:w-[420px] md:w-[560px] lg:w-[700px] h-auto object-contain drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]"
          />
        </div>
      </section>

      {/* ===== TOUR INTRO SECTION ===== */}
      <section
        className="relative w-full min-h-[420px] py-[70px] px-6 sm:px-12 md:px-16 lg:px-24 bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/what-we-do-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/55 pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Heading */}
          <div className="w-full md:w-[38%] flex items-center justify-center">
            <h1 className="font-['Oswald',sans-serif] text-[40px] sm:text-[45px] font-[200] leading-[1.2] text-white tracking-wide text-center md:text-left">
              Our Tours
            </h1>
          </div>

          {/* Description */}
          <div className="w-full md:w-[61%] font-['Oswald',sans-serif] text-[17px] sm:text-[18px] font-[300] leading-[1.65] text-[#FFFDFD] text-left md:text-justify space-y-4">
            <p className="py-[4px]">
              Moon Rabbit offers a unique Mystical Guided Tour through the
              bewildering scenery of Northern Pakistan. Our tour packages are all
              inclusive and only require a simple booking followed by your arrival
              to a local airport of your choice.
            </p>
            <p className="py-[4px]">
              From arrival till your departure Moon Rabbit will lavish you with
              hospitality while providing dependable 4×4 vehicles, boats, mountain
              bikes, and a variety of picturesque accommodations along with
              authentic cuisine from the best restaurants in the area.
            </p>
            <div className="pt-2">
              <Link
                href="/"
                className="inline-block bg-[#ff4a52] hover:bg-[#ff3039] text-white text-sm uppercase tracking-wider font-semibold py-3.5 px-8 rounded-full transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
}
