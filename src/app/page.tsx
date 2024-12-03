import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experiences from "@/components/Experiences";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import FloatingMouseWrapper from "@/components/FloatingMouseWrapper";

// TODO: add orientation check for mobile
// TODO: add scroll animation
// TODO: add vw-full for all sections

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Experiences />
      <Projects />
      <Contact />
      <FloatingMouseWrapper />
    </main>
  );
}
