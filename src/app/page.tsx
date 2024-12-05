import Navbar from "@/components/appSideBar";
import Hero from "@/components/hero";
import Experiences from "@/components/experiences";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import FloatingMouseWrapper from "@/components/floatingMouseWrapper";


export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      <Experiences />
      <Projects />
      <Contact />
      <FloatingMouseWrapper />
    </main>
  );
}
