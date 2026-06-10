import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="relative z-20 mx-auto mb-10 flex max-w-7xl items-center justify-between rounded-full border border-[#d8b15e]/20 bg-[#030302]/78 px-5 py-3 backdrop-blur-md md:px-6">
      <Link href="/" className="text-lg font-black tracking-tight text-[#f6dfaa]">
        جامانده
      </Link>

      <nav className="hidden items-center gap-7 text-sm text-[#d8c7a6] md:flex">
        <Link href="/gallery" className="transition hover:text-[#f6dfaa]">
          روایت تصویری
        </Link>
        <Link href="/plus" className="transition hover:text-[#f6dfaa]">
          پلاس کتاب
        </Link>
        <Link href="/about" className="transition hover:text-[#f6dfaa]">
          درباره کتاب
        </Link>
        <Link href="/contact" className="transition hover:text-[#f6dfaa]">
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