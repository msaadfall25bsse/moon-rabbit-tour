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

      {/* ===== SPACER ===== */}
      <section className="w-full bg-black p-2.5">
        <div className="mx-auto h-[50px] w-full max-w-[1140px]" />
      </section>

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
}
