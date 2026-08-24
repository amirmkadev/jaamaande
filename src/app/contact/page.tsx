import KiswahBackground from "@/components/KiswahBackground";
import SiteHeader from "@/components/SiteHeader";

export default function ContactPage() {
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
            ارتباط با مؤلف
          </p>

          <h1 className="mb-6 text-5xl font-black leading-tight text-[#f6dfaa] md:text-7xl">
            ارتباط با ما
          </h1>

          <p className="mb-12 max-w-3xl text-lg leading-[2.15] text-[#d8c7a6]">
            راه‌های ارتباطی رسمی کتاب «جامانده» و مؤلف در این صفحه منتشر
            می‌شوند.
          </p>

          <div className="max-w-3xl rounded-[2rem] border border-[#d8b15e]/24 bg-[#050403]/78 p-8 shadow-[0_0_70px_rgba(216,177,94,0.08)]">
            <p className="mb-5 text-lg leading-[2.15] text-[#d8c7a6]">
              برای ثبت نظر می‌توانید از لینک زیر استفاده کنید:
            </p>

            <a
              href="https://ble.ir/jaamaandebot"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-gradient-to-l from-[#b77a21] via-[#f0cf75] to-[#9b651a] px-8 py-4 text-base font-black text-[#130c04] transition hover:scale-[1.03]"
            >
              ثبت نظر در بله
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
