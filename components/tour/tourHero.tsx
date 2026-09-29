const TourHero = () => {
  return (
    <section
      className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/tour/tour-hero.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="font-oswald text-6xl font-medium uppercase tracking-[0.08em] text-white sm:text-7xl md:text-8xl lg:text-9xl">
          Tours
        </h1>
      </div>
    </section>
  );
};

export default TourHero;