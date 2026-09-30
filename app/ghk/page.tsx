import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "GHK - Moon Rabbit",
  description: "Gilgit-Hunza-Khunjerab Tour Details",
};

export default function GHKPage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-black text-white">
      {/* ================= HEADER / NAVIGATION OVERLAY ================= */}
      <Header />

      {/* ===== HERO SECTION ===== */}
      <section
        className="relative flex min-h-[280px] w-full flex-col bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://moonrabbit.pk/wp-content/uploads/2023/07/1643468.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />
      </section>

      {/* ===== GHK DETAILS SECTION ===== */}
      <section className="w-full bg-black py-[54px] px-[14px] md:px-[38px] lg:px-[86px]">
        <div className="mx-auto flex max-w-[1140px] flex-col md:flex-row items-start justify-between gap-8 lg:gap-0">
          
          {/* Left Column: Map Image */}
          <div className="flex w-full md:w-[40%] flex-col items-center md:mt-[150px]">
            <h2 className="mb-4 font-['Oswald',sans-serif] text-[30px] font-normal text-white tracking-normal text-center">
              GHK
            </h2>
            <div className="relative w-full -mt-[10px]">
              <Image
                src="/tour/ghk_map.png"
                alt="GHK Route Map"
                width={600}
                height={600}
                className="h-auto w-full object-contain"
                unoptimized
              />
            </div>
          </div>
          
          {/* Right Column: Text Information */}
          <div className="flex w-full md:w-[55%] md:ml-auto flex-col text-white">
            <h2 className="mb-8 font-['Oswald',sans-serif] text-[25px] font-normal text-white tracking-normal">
              Gilgit-Hunza-Khunjerab
            </h2>
            
            <p className="mb-12 font-['Oswald',sans-serif] text-[15px] leading-[26px] font-light tracking-normal text-justify py-[7.5px]">
              <strong className="font-normal">Gilgit:</strong> Gilgit is a city located in the Gilgit-Baltistan region of Pakistan. It serves as the capital of the Gilgit-Baltistan administrative territory. Gilgit is situated in a picturesque valley surrounded by the towering peaks of the Himalayas and the Karakoram Range. The city is known for its stunning natural beauty, rich cultural heritage, and strategic importance due to its location on the ancient Silk Road.
            </p>

            <p className="mb-12 font-['Oswald',sans-serif] text-[15px] leading-[26px] font-light tracking-normal text-justify py-[7.5px]">
              <strong className="font-normal">Hunza Valley:</strong> Hunza Valley is a mountainous region located in the Gilgit-Baltistan territory of Pakistan. It&#39;s famous for its breathtaking landscapes, crystal-clear rivers, and the hospitable culture of its people. The valley is home to several charming villages, each offering panoramic views of the surrounding mountains, including Rakaposhi and Ultar Sar. Hunza is also known for its traditional wooden architecture, terraced fields, and the iconic Baltit Fort.
            </p>

            <p className="mb-12 font-['Oswald',sans-serif] text-[15px] leading-[26px] font-light tracking-normal text-justify py-[7.5px]">
              <strong className="font-normal">Khunjerab Pass:</strong> The Khunjerab Pass is a high mountain pass situated at an elevation of about 4,693 meters (15,397 feet) above sea level. It&#39;s one of the highest paved international border crossings in the world and serves as the gateway between Pakistan and China. The pass is located on the Karakoram Highway, which connects Gilgit in Pakistan to Kashgar in China&#39;s Xinjiang region. The pass offers breathtaking views of the surrounding mountains and is also a point of interest for wildlife enthusiasts, as it&#39;s part of the Khunjerab National Park, home to various species like the snow leopard and Marco Polo sheep.
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
