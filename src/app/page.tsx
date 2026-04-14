import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Projects from '@/sections/Projects';
import SkillsGrid from '@/sections/SkillsGrid';
import ContactSection from '@/sections/ContactSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <SkillsGrid />
        <ContactSection />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
