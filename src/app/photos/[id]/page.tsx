import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { photos } from "@/data/photos";
import KiswahBackground from "@/components/KiswahBackground";
import SiteHeader from "@/components/SiteHeader";

type PhotoPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PhotoPage({ params }: PhotoPageProps) {
  const { id } = await params;
  const photo = photos.find((item) => item.id === id);

  if (!photo) {
    notFound();
  }

  const currentIndex = photos.findIndex((item) => item.id === id);
  const previousPhoto = currentIndex > 0 ? photos[currentIndex - 1] : null;
  const nextPhoto =
    currentIndex < photos.length - 1 ? photos[currentIndex + 1] : null;

  return (
    <main
      dir="rtl"
      className="min-h-screen overflow-hidden bg-[#020201] px-5 py-6 text-[#f7ead2]"
    >
      <KiswahBackground />

      <section className="relative mx-auto max-w-7xl">
        <SiteHeader />

        <div className="grid min-h-[calc(100vh-9rem)] items-center gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <aside className="order-2 text-right lg:order-1">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#d8b15e]/35 bg-[#080604]/75 px-5 py-3 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#e8c66d]" />
              <span className="text-sm font-medium text-[#e8c66d]">
                {photo.chapter}
              </span>
            </div>

            <div className="mb-8 border-r-4 border-[#d8b15e] pr-6">
              <p className="mb-3 text-base text-[#d9bd78]">
                عکس {photo.number}
              </p>

              <h1 className="text-4xl font-black leading-[1.45] text-[#f6dfaa] md:text-6xl">
                {photo.title}
              </h1>
            </div>

            <p className="mb-8 max-w-xl text-lg leading-[2.2] text-[#d8c7a6]">
              {photo.caption}
            </p>

            {photo.id === "32" && (
              <a
                href="https://ble.ir/jaamaandebot"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-5 block w-full rounded-full bg-gradient-to-l from-[#b77a21] via-[#f0cf75] to-[#9b651a] px-5 py-3 text-center text-sm font-black text-[#130c04] shadow-[0_0_35px_rgba(215,169,75,0.24)] transition hover:scale-[1.02] sm:w-fit sm:min-w-48"
              >
                ثبت نظر
              </a>
            )}

            <div className="grid gap-3 sm:grid-cols-3">
              {previousPhoto ? (
                <Link
                  href={`/photos/${previousPhoto.id}`}
                  className="rounded-full border border-[#d8b15e]/40 bg-[#080604]/70 px-5 py-3 text-center text-sm font-bold text-[#f5dfae] transition hover:border-[#f1c86a] hover:bg-[#d7a94b]/10"
                >
                  عکس قبلی
                </Link>
              ) : (
                <span className="rounded-full border border-[#d8b15e]/10 bg-[#080604]/30 px-5 py-3 text-center text-sm font-bold text-[#d8c7a6]/35">
                  عکس قبلی
                </span>
              )}

              <Link
                href="/gallery"
                className="rounded-full border border-[#d8b15e]/40 bg-[#080604]/70 px-5 py-3 text-center text-sm font-bold text-[#f5dfae] transition hover:border-[#f1c86a] hover:bg-[#d7a94b]/10"
              >
                گالری
              </Link>

              {nextPhoto ? (
                <Link
                  href={`/photos/${nextPhoto.id}`}
                  className="rounded-full bg-gradient-to-l from-[#b77a21] via-[#f0cf75] to-[#9b651a] px-5 py-3 text-center text-sm font-black text-[#130c04] shadow-[0_0_35px_rgba(215,169,75,0.24)] transition hover:scale-[1.03]"
                >
                  عکس بعدی
                </Link>
              ) : (
                <span className="rounded-full border border-[#d8b15e]/10 bg-[#080604]/30 px-5 py-3 text-center text-sm font-bold text-[#d8c7a6]/35">
                  عکس بعدی
                </span>
              )}
            </div>
          </aside>

          <div className="order-1 lg:order-2">
            <div className="relative rounded-[2rem] border border-[#d8b15e]/60 bg-[#040302] p-3 shadow-[0_0_130px_rgba(216,177,94,0.22)]">
              <div className="absolute -inset-5 -z-10 rounded-[2.5rem] bg-[#d8b15e]/10 blur-3xl" />

              <div className="rounded-[1.6rem] border border-[#d8b15e]/36 bg-[#020201] p-2">
                <div className="relative min-h-[420px] overflow-hidden rounded-[1.2rem] border border-[#d8b15e]/24 bg-[#030302] md:min-h-[650px]">
                  <Image
                    src={photo.image}
                    alt={photo.title}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="mx-auto mt-5 max-w-2xl rounded-full border border-[#d8b15e]/20 bg-[#070504]/78 px-6 py-3 text-center text-sm leading-7 text-[#d8c7a6] backdrop-blur">
              <span>{photo.chapter}</span>
              <span className="mx-3 text-[#d8b15e]">◆</span>
              <span className="text-[#d8b15e]">عکس {photo.number}</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
