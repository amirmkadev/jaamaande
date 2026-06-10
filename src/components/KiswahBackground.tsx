export default function KiswahBackground() {
  return (
    <>
      <div className="fixed inset-0 -z-10 kiswah-bg" />
      <div className="fixed inset-0 -z-10 opacity-[0.18] kiswah-pattern" />

      <div className="fixed inset-x-0 top-0 z-0 h-[8px] bg-gradient-to-l from-[#3d2608] via-[#f0d078] to-[#3d2608]" />
      <div className="fixed inset-x-0 bottom-0 z-0 h-[7px] bg-gradient-to-l from-[#3d2608] via-[#f0d078] to-[#3d2608]" />

      <div className="fixed inset-x-0 top-[22px] -z-10 hidden h-[46px] border-y border-[#d8b15e]/18 bg-[#030302]/64 lg:block">
        <div className="kiswah-ornament h-full opacity-80" />
        <div className="absolute inset-0 flex items-center justify-center text-[13px] tracking-[0.5em] text-[#d8b15e]/55">
          ٭ ٭ ٭ جــــامــــانــــده ٭ ٭ ٭
        </div>
      </div>

      <div className="pointer-events-none fixed inset-5 -z-10 hidden border border-[#d8b15e]/14 lg:block" />
      <div className="pointer-events-none fixed inset-8 -z-10 hidden border border-[#d8b15e]/8 lg:block" />
    </>
  );
}