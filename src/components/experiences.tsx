"use client";

import Image from "next/image";
import replyImage from "@/app/assets/reply.png";
// import replyVideo from "@/app/assets/reply.mp4";
import ouroImage from "@/app/assets/ouro.png";
// import ouroVideo from "@/app/assets/ouro.mp4";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { motion } from "motion/react";
import { Carousel, CarouselItem, CarouselContent, CarouselNext, CarouselPrevious } from "./ui/carousel";


const experiences = [
  {
    company: "Reply - CERC",
    srcImage: replyImage,
    // animatedVideo: replyVideo,
    pageLink: "https://www.reply.com/en",
    position: "Ruby on Rails analist",
    period: "Oct, 2021 - Sep, 2024",
    techStack: []
  },
  {
    company: "Ouro do Montes",
    srcImage: ouroImage,
    // animatedVideo: ouroVideo,
    pageLink: "https://www.ourodosmontes.com.br/",
    position: "Ruby on Rails developer",
    period: "May, 2024 - June, 2024",
    techStack: []
  },
  {
    company: "Ouro do Montes",
    srcImage: ouroImage,
    // animatedVideo: ouroVideo,
    pageLink: "https://www.ourodosmontes.com.br/",
    position: "Ruby on Rails developer",
    period: "May, 2024 - June, 2024",
    techStack: []
  },
  {
    company: "Ouro do Montes",
    srcImage: ouroImage,
    // animatedVideo: ouroVideo,
    pageLink: "https://www.ourodosmontes.com.br/",
    position: "Ruby on Rails developer",
    period: "May, 2024 - June, 2024",
    techStack: []
  },
  {
    company: "Ouro do Montes",
    srcImage: ouroImage,
    // animatedVideo: ouroVideo,
    pageLink: "https://www.ourodosmontes.com.br/",
    position: "Ruby on Rails developer",
    period: "May, 2024 - June, 2024",
    techStack: []
  },
  {
    company: "Ouro do Montes",
    srcImage: ouroImage,
    // animatedVideo: ouroVideo,
    pageLink: "https://www.ourodosmontes.com.br/",
    position: "Ruby on Rails developer",
    period: "May, 2024 - June, 2024",
    techStack: []
  },
  {
    company: "Ouro do Montes",
    srcImage: ouroImage,
    // animatedVideo: ouroVideo,
    pageLink: "https://www.ourodosmontes.com.br/",
    position: "Ruby on Rails developer",
    period: "May, 2024 - June, 2024",
    techStack: []
  },
  {
    company: "Ouro do Montes",
    srcImage: ouroImage,
    // animatedVideo: ouroVideo,
    pageLink: "https://www.ourodosmontes.com.br/",
    position: "Ruby on Rails developer",
    period: "May, 2024 - June, 2024",
    techStack: []
  },
];

const Experiences = () => {

  return (
    <section id="experience" className="flex items-center h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Experiences</h2>
        <div className="relative">
          <div className="flex space-x-6 max-h-svh">
            <Carousel className="w-full max-w-xs">
              <CarouselContent>
                {experiences.slice(0, 5).map((exp, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardTitle className="flex aspect-square items-center justify-center p-6">
                          <a href={exp.pageLink} className="block">
                            <Image
                              className="rounded-lg mb-4"
                              src={exp.srcImage}
                              height={200}
                              width={200}
                              alt={exp.company}
                            />
                          </a>
                          <div className="text-center">
                            <CardTitle className="text-4xl font-semibold">{exp.company}</CardTitle>
                            <CardDescription>
                              {exp.period}, {exp.position}
                            </CardDescription>
                          </div>
                        </CardTitle>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Experiences;

