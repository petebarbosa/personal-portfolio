"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "Company 1",
    position: "Position 1",
    period: "2022 - Present",
    description: "Description of your role and achievements",
  },
  {
    id: 2,
    company: "Company 2",
    position: "Position 2",
    period: "2022 - Present",
    description: "Description of your role and achievements",
  },
];

const Experiences = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) =>
      prev === experiences.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? experiences.length - 1 : prev - 1
    );
  };

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Experiences</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%` }}>
              {experiences.map((exp) => (
                <div key={exp.id} className="w-full flex-shrink px-4">
                  <div className="bg-white p-6 reounded-lg shadown-lg">
                    <h3 className="text-xl font-bold mb-2">{exp.company}</h3>
                    <h4 className="text-lg text-gray-600 mb-2">{exp.position}</h4>
                    <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
                    <p className="text-gray-700">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
            <ChevronLeft className=" w-6 h-6" />
          </button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experiences;

