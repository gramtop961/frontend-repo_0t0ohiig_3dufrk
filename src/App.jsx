import Header from './components/Header';
import Hero from './components/Hero';
import { AboutSection, ProductsSection, TechnologySection, ProjectsSection, ContactSection } from './components/Sections';

function App() {
  return (
    <div className="font-sans bg-white">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ProductsSection />
        <TechnologySection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
