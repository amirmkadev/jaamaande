import Link from "next/link";
import BookCoverSlider from "@/components/BookCoverSlider";
import KiswahBackground from "@/components/KiswahBackground";
import SiteHeader from "@/components/SiteHeader";

export default function Home() {
  return (
    <main
      dir="rtl"
      className="min-h-screen overflow-hidden bg-[#020201] px-5 py-6 text-[#f7ead2]"
    >
      <KiswahBackground />

      <section className="relative mx-auto max-w-7xl">
        <SiteHeader />

        <div className="grid min-h-[calc(100vh-8rem)] items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div className="text-right">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#d8b15e]/35 bg-[#080604]/75 px-5 py-3 shadow-[0_0_40px_rgba(216,177,94,0.08)] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#e8c66d]" />
              <span className="text-sm font-medium text-[#e8c66d]">
                همراه تصویری کتاب
              </span>
            </div>

            <div className="relative mb-8 border-r-4 border-[#d8b15e] pr-6">
              <p className="mb-3 text-base text-[#d9bd78]">
                روایت تصویری سفر حج
              </p>

              <h1 className="text-6xl font-black leading-tight tracking-tight text-[#f6dfaa] md:text-8xl">
                جامانده
              </h1>
            </div>

            <p className="mb-5 max-w-2xl text-2xl font-semibold leading-[2.05] text-[#fff2cf] md:text-3xl">
              آنچه در کتاب نماند، اینجا در تصویر ادامه پیدا می‌کند.
            </p>

            <p className="mb-10 max-w-2xl text-lg leading-[2.15] text-[#d8c7a6]">
              اینجا امتداد دیجیتال کتاب «جامانده» است؛ جایی برای دیدن عکس‌ها،
              خواندن عکس‌نوشت‌ها و دنبال کردن رد سفر از مکه تا مدینه. هر QR در
              کتاب، دریچه‌ای کوچک به یکی از لحظه‌های این سفر است.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/gallery"
                className="rounded-full bg-gradient-to-l from-[#b77a21] via-[#f0cf75] to-[#9b651a] px-8 py-4 text-center text-base font-black text-[#130c04] shadow-[0_0_45px_rgba(215,169,75,0.30)] transition hover:scale-[1.03]"
              >
                ورود به روایت تصویری
              </Link>

              <Link
                href="/plus"
                className="rounded-full border border-[#d8b15e]/45 bg-[#080604]/60 px-8 py-4 text-center text-base font-bold text-[#f5dfae] transition hover:border-[#f1c86a] hover:bg-[#d7a94b]/10"
              >
                پلاس کتاب
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <BookCoverSlider />
          </div>
        </div>
      </section>
    </main>
  );
}