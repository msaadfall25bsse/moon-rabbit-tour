import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Tours - Moon Rabbit",
  description: "Moon Rabbit Guided Tours",
};

type Tour = {
  slug: string;
  name: string;
  image: string;
  width: string;
  height: number;
  shadow: boolean;
  shadowCaption: boolean;
  natural: [number, number];
};

const rowOne: Tour[] = [
  {
    slug: "ghk",
    name: "Gilgit-Hunza-Khunjerab",
    image: "/tour/ghk.png",
    width: "24.608%",
    height: 353,
    shadow: true,
    shadowCaption: true,
    natural: [1024, 1024],
  },
  {
    slug: "sks",
    name: "Skardu-Khaplu-Shigar",
    image: "/tour/sks.png",
    width: "25.748%",
    height: 351,
    shadow: false,
    shadowCaption: false,
    natural: [1024, 1024],
  },
  {
    slug: "gyp",
    name: "Gilgit-Yasin-Phandar",
    image: "/tour/gyp.png",
    width: "25.748%",
    height: 351,
    shadow: false,
    shadowCaption: false,
    natural: [1024, 1024],
  },
  {
    slug: "skc",
    name: "Swat-Kalash-Chitral",
    image: "/tour/skc.png",
    width: "26.201%",
    height: 351,
    shadow: false,
    shadowCaption: false,
    natural: [1024, 1024],
  },
];

const rowTwo: Tour[] = [
  {
    slug: "fm",
    name: "Fairy Meadows",
    image: "/tour/fm.jpg",
    width: "24.608%",
    height: 353,
    shadow: true,
    shadowCaption: true,
    natural: [1024, 1024],
  },
  {
    slug: "yah",
    name: "Yougo - Asokole - Hushe",
    image: "/tour/yah.jpg",
    width: "25.748%",
    height: 351,
    shadow: false,
    shadowCaption: false,
    natural: [1024, 1024],
  },
  {
    slug: "bms",
    name: "Booni - Mastuj - Shandur",
    image: "/tour/bms.jpg",
    width: "26.201%",
    height: 351,
    shadow: false,
    shadowCaption: false,
    natural: [1024, 1024],
  },
  {
    slug: "da",
    name: "Deosai & Astore",
    image: "/tour/da.jpg",
    width: "25.748%",
    height: 351,
    shadow: false,
    shadowCaption: false,
    natural: [1080, 1080],
  },
];

export default function TourPage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-black text-white">
      {/* ===== GLOBAL HEADER ===== */}
      <Header />

      {/* ===== HERO: BACKGROUND IMAGE WITH 50% BLACK OVERLAY ===== */}
      <section
        className="relative flex min-h-[255px] w-full flex-col bg-cover bg-center bg-no-repeat p-2.5"
        style={{
          backgroundImage: "url('/tour/hero-background.jpg')",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-black/50"
        />
        <div className="h-10" />
      </section>

      {/* ===== WOOD SIGN ROW ===== */}
      <section className="flex w-full items-center justify-start bg-black py-5 pl-[45px] pr-[45px]">
        <div className="mt-[-5px] mb-[-16px]">
          <Image
            src="/tour/wood-sign.png"
            alt="Wood Sign"
            width={172}
            height={115}
            className="h-auto w-[172px] max-w-full"
            loading="lazy"
          />
        </div>
      </section>

      {/* ===== TOUR CARDS ROW ONE ===== */}
      <TourRow tours={rowOne} />



      {/* ===== TOUR CARDS ROW TWO ===== */}
      <TourRow tours={rowTwo} />

      {/* ===== SPACER ===== */}
      <section className="w-full bg-black p-2.5">
        <div className="mx-auto h-[50px] w-full max-w-[1140px]" />
      </section>

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
}

function TourRow({ tours }: { tours: Tour[] }) {
  return (
    <section className="w-full bg-black p-2.5">
      <div className="mx-auto flex w-full flex-wrap justify-center bg-[#0f0f0f] px-5 md:w-[96.645%] md:flex-nowrap">
        {tours.map((tour) => (
          <TourCard key={tour.slug} tour={tour} />
        ))}
      </div>
    </section>
  );
}

function TourCard({ tour }: { tour: Tour }) {
  return (
    <div
      className="tour-fade-in w-full shrink-0 grow-0 p-2.5 md:w-[var(--card-w)]"
      style={{ "--card-w": tour.width } as React.CSSProperties}
    >
      <figure className="m-0">
        <Link href={`/${tour.slug}/`} className="relative block overflow-hidden rounded-[5px] group">
          <Image
            src={tour.image}
            alt={tour.name}
            width={tour.natural[0]}
            height={tour.natural[1]}
            className="block w-full max-w-full object-fill transition-transform duration-[300ms] group-hover:scale-110"
            style={{
              height: `${tour.height}px`,
              boxShadow: tour.shadow ? "0px 0px 10px 0px rgba(0,0,0,0.5)" : undefined,
            }}
            loading="lazy"
          />
          {/* Text Overlay for Abbreviation */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center transition-transform duration-[300ms] group-hover:scale-110">
            <span className="text-[32px] md:text-[40px] font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-wider">
              {tour.slug.toUpperCase()}
            </span>
          </div>
        </Link>
        <figcaption
          className="mt-2.5 text-center font-[family-name:var(--font-oswald)] text-[15px] font-medium leading-6"
          style={{
            color: tour.shadowCaption ? "#FFFDFD" : "#FFFFFF",
            textShadow: tour.shadowCaption ? "0px 0px 10px rgba(0,0,0,0.3)" : undefined,
          }}
        >
          {tour.name}
        </figcaption>
      </figure>
    </div>
  );
}
