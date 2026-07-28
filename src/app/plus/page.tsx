import Link from "next/link";
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

        <div className="py-12 text-right">
          <p className="mb-5 inline-flex rounded-full border border-[#d8b15e]/30 bg-[#080604]/70 px-5 py-2 text-sm text-[#d8b15e]">
            محتوای تکمیلی کتاب
          </p>

          <h1 className="mb-6 text-5xl font-black leading-tight text-[#f6dfaa] md:text-7xl">
            پلاس کتاب
          </h1>

          <p className="mb-12 max-w-3xl text-lg leading-[2.15] text-[#d8c7a6]">
            عکس‌ها، یادداشت‌ها و روایت‌های تکمیلی «جامانده» در این بخش منتشر
            می‌شوند.
          </p>

          <div className="rounded-[2rem] border border-[#d8b15e]/24 bg-[#050403]/78 p-8 shadow-[0_0_70px_rgba(216,177,94,0.08)]">
            <p className="mb-4 text-sm font-bold text-[#d8b15e]">به‌زودی</p>

            <h2 className="mb-4 text-3xl font-black text-[#f6dfaa]">
              روایت‌های تکمیلی در راه‌اند.
            </h2>

            <Link
              href="/gallery"
              className="mt-8 inline-flex rounded-full bg-gradient-to-l from-[#b77a21] via-[#f0cf75] to-[#9b651a] px-8 py-4 text-base font-black text-[#130c04]"
            >
              مشاهده روایت تصویری
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
