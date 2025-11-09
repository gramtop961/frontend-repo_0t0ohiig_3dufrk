import { Building2, CheckCircle2, Factory, Shield, Ruler, Hammer } from 'lucide-react';

export function AboutSection() {
  const items = [
    { icon: <Shield className="w-6 h-6 text-[#FF5203]" />, title: 'Strength & Quality', desc: 'ISO-certified manufacturing with rigorous testing protocols.' },
    { icon: <Factory className="w-6 h-6 text-[#FF5203]" />, title: 'Modern Facilities', desc: 'Precision rolling and German QST Thermex technology.' },
    { icon: <Ruler className="w-6 h-6 text-[#FF5203]" />, title: 'Engineering Precision', desc: 'High ductility, bendability, and seismic safety standards.' },
  ];
  return (
    <section id="about" className="bg-[#F4F4F4] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]">About Us</h2>
            <p className="mt-4 text-[#1A1A1A]/70">Founded in 1996 in Patna, Bihar, Neel Kamal Steels has grown into a trusted partner for India’s infrastructure. From bridges and towers to residential and commercial spaces, our steel forms the backbone of progress.</p>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {items.map((it) => (
                <div key={it.title} className="bg-white p-4 rounded-md shadow-sm border border-gray-200">
                  {it.icon}
                  <h3 className="mt-2 font-semibold">{it.title}</h3>
                  <p className="text-sm text-gray-600">{it.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop" alt="Industrial factory" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProductsSection() {
  const products = [
    {
      title: 'TMT Bars',
      img: 'https://images.unsplash.com/photo-1598346762291-aee88549193a?q=80&w=1200&auto=format&fit=crop',
      features: ['High tensile strength', 'Superior ductility', 'Excellent bendability'],
    },
    {
      title: 'Structural Steel',
      img: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop',
      features: ['Corrosion resistance', 'Dimensional accuracy', 'Wide size range'],
    },
    {
      title: 'Industrial Metal Solutions',
      img: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
      features: ['Custom fabrication', 'Project-based supply', 'On-time delivery'],
    },
  ];

  return (
    <section id="products" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]">Products & Services</h2>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#1A1A1A] text-white hover:opacity-90">
            Download Brochure
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.title} className="group rounded-lg border border-gray-200 overflow-hidden shadow-sm">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <ul className="mt-3 space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-[#FF5203]" /> {f}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TechnologySection() {
  const tech = [
    'Precision Rolling Technology',
    'German QST Thermex Process',
    'High Ductility and Bendability',
    'Anti-Corrosion Resistance',
    'Seismic Safety & Strength Standards',
  ];

  return (
    <section id="technology" className="bg-[#F4F4F4] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]">Technology & Quality</h2>
            <p className="mt-4 text-[#1A1A1A]/70">We combine advanced metallurgy with stringent QA systems to produce steel that performs in the most demanding environments.</p>
            <ul className="mt-6 space-y-3">
              {tech.map((t) => (
                <li key={t} className="flex items-start gap-3 text-gray-800"><span className="mt-1 w-2 h-2 rounded-full bg-[#FF5203]"/> {t}</li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
              <source src="https://cdn.coverr.co/videos/coverr-metal-parts-6994/1080p.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  const projects = [
    { name: 'River Bridge, Bihar', img: 'https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Metro Viaduct, Delhi', img: 'https://images.unsplash.com/photo-1465066989788-372fcdde2a9f?q=80&w=1200&auto=format&fit=crop' },
    { name: 'IT Park, Bengaluru', img: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Residential Towers, Mumbai', img: 'https://images.unsplash.com/photo-1529429612779-c8e40ef2f36e?q=80&w=1200&auto=format&fit=crop' },
  ];

  return (
    <section id="projects" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-8">Projects & Gallery</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {projects.map((p) => (
            <div key={p.name} className="relative group aspect-[4/3] overflow-hidden rounded-lg">
              <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity grid place-items-center">
                <p className="text-white text-sm font-semibold text-center px-3">{p.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  const year = new Date().getFullYear();
  return (
    <section id="contact" className="bg-[#0b0b0b] text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Contact Us</h2>
            <p className="mt-3 text-white/70">We’re here to support your next project with premium steel and reliable delivery.</p>
            <div className="mt-6 space-y-2 text-white/80">
              <p><strong>Phone:</strong> +91 90000 00000</p>
              <p><strong>Email:</strong> sales@neelkamalsteels.com</p>
              <p><strong>Office:</strong> Patna, Bihar, India</p>
              <a className="inline-block mt-3 px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600" href="https://wa.me/919000000000?text=Hey,%20I'm%20interested%20in%20Neel%20Kamal%20Steel%20products..." target="_blank" rel="noreferrer">WhatsApp Us</a>
            </div>
            <div className="mt-6 rounded-lg overflow-hidden border border-white/10">
              <iframe title="Patna Map" src="https://www.google.com/maps?q=Patna%2C%20Bihar&output=embed" className="w-full h-56"></iframe>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="bg-white/5 backdrop-blur rounded-lg p-6 space-y-4 border border-white/10">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input required type="text" className="w-full px-3 py-2 rounded-md bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#FF5203]" />
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input required type="email" className="w-full px-3 py-2 rounded-md bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#FF5203]" />
              </div>
              <div>
                <label className="block text-sm mb-1">Phone</label>
                <input type="tel" className="w-full px-3 py-2 rounded-md bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#FF5203]" />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea rows={4} className="w-full px-3 py-2 rounded-md bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#FF5203]"></textarea>
            </div>
            <button className="w-full py-3 rounded-md font-semibold bg-gradient-to-r from-[#FF5203] to-red-600 hover:opacity-95">Send Enquiry</button>
          </form>
        </div>
      </div>

      <footer className="mt-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-[#FF5203] to-orange-600 mb-3" />
              <p className="text-white/80">Premium steel for India’s infrastructure. Built with Strength & Trust.</p>
            </div>
            <div>
              <p className="font-semibold mb-3">Quick Links</p>
              <ul className="space-y-2 text-white/70">
                <li><a href="#home" className="hover:text-white">Home</a></li>
                <li><a href="#about" className="hover:text-white">About</a></li>
                <li><a href="#products" className="hover:text-white">Products</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-3">Support</p>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white">Disclaimer</a></li>
              </ul>
            </div>
          </div>
          <p className="mt-8 text-center text-white/60">© {year} Neel Kamal Steels Pvt. Ltd. | Built with Strength & Trust.</p>
        </div>
      </footer>
    </section>
  );
}
