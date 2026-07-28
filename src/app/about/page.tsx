import Image from "next/image";
import Link from "next/link";
import KiswahBackground from "@/components/KiswahBackground";
import SiteHeader from "@/components/SiteHeader";

export default function AboutPage() {
  return (
    <main
      dir="rtl"
      className="min-h-screen overflow-hidden bg-[#020201] px-5 py-6 text-[#f7ead2]"
    >
      <KiswahBackground />

      <section className="relative mx-auto max-w-7xl">
        <SiteHeader />

        <div className="grid items-center gap-12 py-10 lg:grid-cols-[1fr_0.78fr]">
          <div className="text-right">
            <p className="mb-5 inline-flex rounded-full border border-[#d8b15e]/30 bg-[#080604]/70 px-5 py-2 text-sm text-[#d8b15e]">
              درباره کتاب
            </p>

            <h1 className="mb-6 text-5xl font-black leading-tight text-[#f6dfaa] md:text-7xl">
              جامانده؛ ادامه کتاب در تصویر
            </h1>

            <p className="mb-6 max-w-3xl text-lg leading-[2.2] text-[#d8c7a6]">
              «جامانده» سفرنامه‌ای از حج است؛ روایتی از مسیر، مکاشفه، ازدحام،
              سکوت، اشتیاق و لحظه‌هایی که گاهی در متن می‌مانند و گاهی فقط در
              تصویر نفس می‌کشند.
            </p>

            <p className="mb-10 max-w-3xl text-lg leading-[2.2] text-[#d8c7a6]">
              در نسخه چاپی کتاب، برای برخی تصاویر به جای چاپ مستقیم عکس، QR
              قرار داده شده است. خواننده با اسکن هر QR وارد صفحه اختصاصی همان
              عکس می‌شود و می‌تواند تصویر و عکس‌نوشت مربوط به آن بخش را ببیند.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/gallery"
                className="rounded-full bg-gradient-to-l from-[#b77a21] via-[#f0cf75] to-[#9b651a] px-8 py-4 text-center text-base font-black text-[#130c04] shadow-[0_0_45px_rgba(215,169,75,0.30)] transition hover:scale-[1.03]"
              >
                مشاهده روایت تصویری
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
            <div className="relative w-full max-w-[430px] rounded-[1.8rem] border border-[#d8b15e]/55 bg-[#040302] p-3 shadow-[0_0_110px_rgba(216,177,94,0.18)]">
              <div className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-[#d8b15e]/10 blur-3xl" />
              <div className="rounded-[1.4rem] border border-[#d8b15e]/35 bg-[#020201] p-2">
                <div className="relative aspect-[2/3] w-full overflow-hidden rounded-[1rem] border border-[#d8b15e]/22 bg-[#030302]">
                  <Image
                    src="/images/cover-front.jpg"
                    alt="جلد کتاب جامانده"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
