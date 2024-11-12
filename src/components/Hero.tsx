import Image from "next/image";
import avatar from "@/app/assets/avatar.png"

const calculateExperience = () => {
  const startDate = new Date(2021, 4);
  const currentDate = new Date();

  let years = currentDate.getFullYear() - startDate.getFullYear();
  const monthDiff = currentDate.getMonth() - startDate.getMonth();

  if (monthDiff < 0) {
    years--;
  }

  const totalMonths = years * 12 + (monthDiff < 0 ? monthDiff + 12 : monthDiff);

  if (totalMonths < 12) {
    return "less than a year";
  } else if (years === 1) {
    return "1`year";
  } else {
    const monthsAfterYears = totalMonths % 12;
    if (monthsAfterYears === 0) {
      return `${years} years`;
    }
    return `${years}+ years`;
  }
};

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

