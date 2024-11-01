import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experiences from "@/components/Experiences";
import Projects from "@/components/Contact";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
