import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="relative z-20 mx-auto mb-10 flex max-w-7xl flex-wrap items-center justify-between gap-3 rounded-[2rem] border border-[#d8b15e]/20 bg-[#030302]/78 px-4 py-3 backdrop-blur-md md:flex-nowrap md:rounded-full md:px-6">
      <Link href="/" className="text-lg font-black tracking-tight text-[#f6dfaa]">
        جامانده
      </Link>

      <nav
        aria-label="ناوبری اصلی"
        className="order-3 grid w-full grid-cols-2 gap-2 border-t border-[#d8b15e]/15 pt-3 text-sm text-[#d8c7a6] md:order-none md:flex md:w-auto md:items-center md:gap-7 md:border-0 md:pt-0"
      >
        <Link
          href="/gallery"
          className="rounded-full border border-[#d8b15e]/20 bg-[#080604]/60 px-3 py-2 text-center transition hover:text-[#f6dfaa] md:border-0 md:bg-transparent md:px-0 md:py-0"
        >
          روایت تصویری
        </Link>
        <Link
          href="/plus"
          className="rounded-full border border-[#d8b15e]/20 bg-[#080604]/60 px-3 py-2 text-center transition hover:text-[#f6dfaa] md:border-0 md:bg-transparent md:px-0 md:py-0"
        >
          پلاس کتاب
        </Link>
        <Link
          href="/about"
          className="rounded-full border border-[#d8b15e]/20 bg-[#080604]/60 px-3 py-2 text-center transition hover:text-[#f6dfaa] md:border-0 md:bg-transparent md:px-0 md:py-0"
        >
          درباره کتاب
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-[#d8b15e]/20 bg-[#080604]/60 px-3 py-2 text-center transition hover:text-[#f6dfaa] md:border-0 md:bg-transparent md:px-0 md:py-0"
        >
          ارتباط با ما
        </Link>
      </nav>

      <Link
        href="/"
        className="hidden rounded-full border border-[#d8b15e]/25 bg-[#080604]/60 px-4 py-2 text-xs font-bold text-[#d8b15e] transition hover:border-[#d8b15e]/50 hover:bg-[#d8b15e]/10 md:block"
      >
        صفحه اصلی
      </Link>
    </header>
  );
}
