import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TourHero from "@/components/layout/tour/TourHero";

export default function TourPage() {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-x-hidden font-['Poppins',sans-serif]">
      {/* Header Overlay */}
      <Header />

      {/* Hero Section */}
      <TourHero />

      {/* Footer */}
      <Footer />
    </div>
  );
}
