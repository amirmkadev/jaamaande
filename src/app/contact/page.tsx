import Link from "next/link";
import KiswahBackground from "@/components/KiswahBackground";
import SiteHeader from "@/components/SiteHeader";

const links = [
  {
    title: "کانال اطلاع‌رسانی",
    description: "لینک کانال رسمی یا صفحه معرفی کتاب",
    href: "#",
  },
  {
    title: "تلگرام مؤلف",
    description: "ارتباط مستقیم با مؤلف در تلگرام",
    href: "#",
  },
  {
    title: "بله مؤلف",
    description: "ارتباط با مؤلف در پیام‌رسان بله",
    href: "#",
  },
  {
    title: "روبیکا مؤلف",
    description: "ارتباط با مؤلف در روبیکا",
    href: "#",
  },
];

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
            از این بخش می‌توانید به کانال‌ها و راه‌های ارتباطی مربوط به کتاب و
            مؤلف دسترسی داشته باشید.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {links.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-[1.7rem] border border-[#d8b15e]/24 bg-[#050403]/82 p-6 text-right transition hover:-translate-y-1 hover:border-[#d8b15e]/55 hover:bg-[#080604]"
              >
                <p className="mb-3 text-sm font-bold text-[#d8b15e]">
                  {item.title}
                </p>
                <p className="leading-8 text-[#d8c7a6]">{item.description}</p>
              </Link>
            ))}
          </div>

          <p className="mt-8 text-sm leading-8 text-[#d8c7a6]/70">
            فعلاً لینک‌ها با علامت # ثبت شده‌اند. وقتی لینک تلگرام، بله، روبیکا
            و کانال را دادی، جایگزین می‌کنیم.
          </p>
        </div>
      </section>
    </main>
  );
}