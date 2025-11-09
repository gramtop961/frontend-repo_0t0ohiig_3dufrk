import Spline from '@splinetool/react-spline';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full bg-[#0b0b0b] text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/JqBuM4DcZiGXqO-1/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="max-w-2xl">
          <span className="inline-block text-xs tracking-widest uppercase text-white/70">Built with Strength & Trust Since 1996</span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Leading Steel Manufacturer in India
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            Delivering High-Strength TMT Bars & Structural Solutions Since 1996.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#products" className="inline-flex items-center gap-2 px-5 py-3 rounded-md font-semibold bg-white text-[#1A1A1A] hover:bg-gray-100 transition">
              Explore Products <ChevronRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-md font-semibold text-white bg-gradient-to-r from-[#FF5203] to-red-600 shadow shadow-orange-500/30 hover:opacity-95 transition">
              Enquire Now
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-xl">
            {[
              ['25+ Years of Excellence'],
              ['ISO Certified Manufacturing'],
              ['50K+ Projects Supplied'],
            ].map(([label]) => (
              <div key={label} className="rounded-md bg-white/5 border border-white/10 p-4">
                <p className="text-sm text-white/80">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/80" />
    </section>
  );
}
