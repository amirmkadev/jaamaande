import Image from "next/image";
import Link from "next/link";
import { plusItems } from "@/data/plusItems";
import KiswahBackground from "@/components/KiswahBackground";
import SiteHeader from "@/components/SiteHeader";

export default function PlusPage() {
  return (
    <main
      dir="rtl"
      className="min-h-screen overflow-hidden bg-[#020201] px-5 py-6 text-[#f7ead2]"
    >
      <KiswahBackground />

      <section className="relative mx-auto max-w-7xl">
        <SiteHeader />

        <div className="mb-14 text-right">
          <p className="mb-5 inline-flex rounded-full border border-[#d8b15e]/30 bg-[#080604]/70 px-5 py-2 text-sm text-[#d8b15e]">
            محتوای تکمیلی کتاب
          </p>

          <h1 className="mb-6 text-5xl font-black leading-tight text-[#f6dfaa] md:text-7xl">
            پلاس کتاب
          </h1>

          <p className="max-w-3xl text-lg leading-[2.15] text-[#d8c7a6]">
            عکس‌ها، ویدئوها، یادداشت‌ها و روایت‌های تکمیلی «جامانده» در این
            گالری منتشر شده‌اند.
          </p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {plusItems.map((item) => (
            <Link
              key={item.id}
              href={`/plus/${item.id}`}
              className="group relative overflow-hidden rounded-[1.8rem] border border-[#d8b15e]/24 bg-[#050403]/86 p-3 shadow-[0_0_45px_rgba(216,177,94,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#d8b15e]/60 hover:shadow-[0_0_85px_rgba(216,177,94,0.17)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(216,177,94,0.18),transparent_45%)] opacity-0 transition duration-300 group-hover:opacity-100" />

              <div className="relative overflow-hidden rounded-[1.35rem] border border-[#d8b15e]/26 bg-[#020201]">
                <div className="absolute right-4 top-4 z-10 rounded-full border border-[#d8b15e]/50 bg-[#020201]/78 px-3 py-1.5 text-xs font-bold text-[#f0cf75] backdrop-blur">
                  {item.mediaType === "video" ? "ویدئو" : "عکس"} {item.number}
                </div>

                <div className="relative aspect-[4/3] w-full">
                  {item.mediaType === "image" ? (
                    <Image
                      src={item.media}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center transition duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <video
                      src={item.media}
                      aria-label={item.title}
                      muted
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>

                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#020201] to-transparent" />
              </div>

              <div className="relative p-4 text-right">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <span className="text-xs text-[#d8b15e]">{item.chapter}</span>
                  <span className="h-px flex-1 bg-[#d8b15e]/18" />
                </div>

                <h2 className="mb-3 text-2xl font-black leading-[1.6] text-[#f6dfaa]">
                  {item.title}
                </h2>

                <p className="line-clamp-2 min-h-[3.5rem] text-sm leading-7 text-[#d8c7a6]">
                  {item.caption}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-[#d8b15e]/14 pt-4">
                  <span className="text-xs text-[#d8c7a6]/65">
                    {item.mediaType === "video" ? "ویدئو" : "عکس"} {item.number}
                  </span>
                  <span className="text-sm font-black text-[#d8b15e] transition group-hover:translate-x-[-4px]">
                    مشاهده {item.mediaType === "video" ? "ویدئو" : "عکس"} ←
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
