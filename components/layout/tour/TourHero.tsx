import Image from "next/image";

export default function TourHero() {
  return (
    <section className="relative w-full h-[50vh] min-h-[400px] md:h-[60vh] md:min-h-[500px] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/image/tour/tour-hero-bg.jpg')" }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Hero Text / Image */}
      <div className="relative z-20 w-full max-w-[800px] px-6 mt-16 flex justify-center">
        <Image
          src="/image/tour/tour-hero-text.png"
          alt="Tours"
          width={1000}
          height={500}
          className="w-full max-w-[500px] md:max-w-[800px] h-auto object-contain drop-shadow-2xl"
          priority
        />
      </div>
    </section>
  );
}
