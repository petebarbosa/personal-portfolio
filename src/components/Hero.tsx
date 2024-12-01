import Image from "next/image";
import avatar from "@/app/assets/avatar.png";
import { calculateExperience } from "@/utils/calculateExperience";

const Hero = () => {
  return (
    <section id="home" className="pt-12 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome!
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Please, call me Pete!
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              I'm a software engineer with {calculateExperience()} of experience,
              dedicated to createing efficient and innovative solutions.
              I specialize in web development and love turning complex problems into
              simple and beautiful applications.
            </p>
            <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get in touch
            </a>
          </div>
          <div className="relative h-[400px] w-full">
            <Image src={avatar} alt="Pedro's photo" className="rounded-lg object-cover xl:ml-20" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;

