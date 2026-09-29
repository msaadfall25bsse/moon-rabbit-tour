import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden" style={{ minHeight: "240px" }}>

      {/* === Background: user provided map image === */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/WhatsApp%20Image%202026-09-28%20at%205.17.38%20AM.jpeg')" }}
      />
      {/* Darkening overlay so text stays readable */}
      <div className="absolute inset-0 bg-black/60" />

      {/* === Main Footer Content Row === */}
      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-8 sm:px-12 py-10 flex justify-between items-end">

        {/* Logo Lockup (Left Aligned) */}
        <div className="flex flex-col items-center justify-center text-center pt-2 pb-4">

          {/* Logo Image */}
          <Link href="/" className="transition-opacity hover:opacity-80 duration-300 mb-2">
            <Image
              src="/logo.png"
              alt="Moon Rabbit Tours"
              width={150}
              height={150}
              className="w-[120px] sm:w-[150px] h-auto object-contain drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
            />
          </Link>

        

          {/* Cursive Tagline */}
          <p
            className="text-white text-[16px] sm:text-[18px] leading-snug drop-shadow-md"
            style={{ fontFamily: "var(--font-dancing), 'Georgia', cursive", fontWeight: 400 }}
          >
            ..a <span className="text-[#e2c565]">spiritual</span> journey through the material <span className="text-[20px] sm:text-[22px]">World</span>
          </p>
        </div>

        {/* Right Side Mushroom Image */}
        <div className="hidden sm:block pb-6 pr-4 sm:pr-8">
          <Image
            src="/amanita.png"
            alt="Mushroom"
            width={140}
            height={150}
            className="w-[100px] sm:w-[140px] lg:w-[160px] h-auto object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </footer>
  );
}
