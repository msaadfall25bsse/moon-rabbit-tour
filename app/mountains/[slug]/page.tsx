import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MOUNTAINS_DATA } from "../../mountains-data";

export async function generateStaticParams() {
  return MOUNTAINS_DATA.map((mountain) => ({
    slug: mountain.slug,
  }));
}

export default async function MountainPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const mountain = MOUNTAINS_DATA.find((m) => m.slug === slug);

  if (!mountain) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white font-['Poppins',sans-serif]">
      {/* Header bar with Back Link */}
      <header className="w-full border-b border-white/10 px-6 sm:px-12 py-5 flex items-center justify-between">
        <Link href="/" className="inline-block transition-transform hover:scale-105">
          <Image
            src="/logo.png"
            alt="Moon Rabbit"
            width={120}
            height={120}
            className="w-[90px] sm:w-[110px] h-auto object-contain"
          />
        </Link>
        <Link
          href="/"
          className="text-sm tracking-wider uppercase border border-white/30 rounded-full px-5 py-2 hover:bg-white hover:text-black transition-all"
        >
          ← Back to Home
        </Link>
      </header>

      {/* Hero Banner for specific mountain */}
      <main className="max-w-5xl mx-auto px-6 py-12 sm:py-16">
        <div className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden mb-10 border border-white/10 shadow-2xl">
          <Image
            src={mountain.image}
            alt={mountain.name}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <span className="text-[#FFD700] text-sm uppercase tracking-widest font-semibold block mb-2 font-['Oswald',sans-serif]">
              {mountain.subtitle}
            </span>
            <h1 className="font-['Oswald',sans-serif] text-4xl sm:text-6xl font-light text-white leading-tight">
              {mountain.name}
            </h1>
          </div>
        </div>

        {/* Specs & Description */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <h2 className="font-['Oswald',sans-serif] text-2xl sm:text-3xl font-normal text-white">
              Overview
            </h2>
            <p className="font-['Oswald',sans-serif] text-lg font-light text-zinc-300 leading-relaxed text-justify">
              {mountain.description}
            </p>
            <div className="pt-4">
              <Link
                href="https://moonrabbit.pk/tour/"
                className="inline-block bg-[#ff4a52] hover:bg-[#ff3039] text-white text-sm uppercase tracking-wider font-semibold py-3.5 px-8 rounded-full transition-colors"
              >
                Book This Tour
              </Link>
            </div>
          </div>

          <div className="bg-zinc-950 border border-white/10 rounded-2xl p-6 h-fit space-y-4">
            <h3 className="font-['Oswald',sans-serif] text-xl font-medium text-white pb-3 border-b border-white/10">
              Mountain Details
            </h3>
            {mountain.heightMeters && (
              <div>
                <p className="text-xs uppercase tracking-wider text-zinc-400">Elevation</p>
                <p className="text-base text-white font-medium">
                  {mountain.heightMeters} ({mountain.heightFeet})
                </p>
              </div>
            )}
            {mountain.range && (
              <div>
                <p className="text-xs uppercase tracking-wider text-zinc-400">Range</p>
                <p className="text-base text-white font-medium">{mountain.range}</p>
              </div>
            )}
            <div>
              <p className="text-xs uppercase tracking-wider text-zinc-400">Location</p>
              <p className="text-base text-white font-medium">Northern Pakistan</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
