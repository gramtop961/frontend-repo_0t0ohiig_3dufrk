import { useEffect, useState } from 'react';
import { Menu, X, Phone, Download } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Technology', href: '#technology' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors ${scrolled ? 'bg-[#1A1A1A]/90 backdrop-blur border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-[#FF5203] to-orange-600 shadow"></div>
            <div>
              <p className="text-white font-bold tracking-wide leading-none">Neel Kamal Steels</p>
              <p className="text-xs text-white/70 leading-none">Since 1996</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-white/80 hover:text-white transition-colors text-sm">
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-semibold text-white bg-gradient-to-r from-[#FF5203] to-red-600 shadow shadow-orange-500/20 hover:opacity-95 transition"
            >
              <Phone className="w-4 h-4" /> Enquire Now
            </a>
            <a
              href="#products"
              className="hidden lg:inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-semibold text-[#1A1A1A] bg-white hover:bg-gray-100 transition"
            >
              <Download className="w-4 h-4" /> Brochure
            </a>
          </nav>

          <button onClick={() => setOpen((v) => !v)} className="md:hidden text-white p-2">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#1A1A1A] border-t border-white/10">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block text-white/80 hover:text-white py-2">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-semibold text-white bg-gradient-to-r from-[#FF5203] to-red-600">
              <Phone className="w-4 h-4" /> Enquire Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
