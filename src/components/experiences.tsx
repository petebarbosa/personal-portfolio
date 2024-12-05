"use client";

import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";
import replyVideo from "@/app/assets/reply.gif";
import ouroVideo from "@/app/assets/ouro.gif";
import { motion } from "motion/react";
import { Carousel, CarouselItem, CarouselContent, CarouselNext, CarouselPrevious } from "./ui/carousel";


const experiences = [
  {
    company: "Reply - CERC",
    srcImage: replyVideo,
    pageLink: "https://www.reply.com/en",
    position: "Ruby on Rails analist",
    period: "Oct, 2021 - Sep, 2024",
    techStack: []
  },
  {
    company: "Ouro do Montes",
    srcImage: ouroVideo,
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
            <Carousel>
              <CarouselContent>
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.075 }}
                  >
                    <CarouselItem className="overflow-visible">
                      <Card className="max-w-sm" >
                        <CardHeader>
                          <a href={exp.pageLink}>
                            <Image
                              className="rounded-t-xl mb-4"
                              src={exp.srcImage}
                              height={400}
                              width={400}
                              alt="Image"
                            />
                          </a>
                        </CardHeader>
                        <CardTitle>{exp.company}</CardTitle>
                        <CardDescription>{exp.period}</CardDescription>
                        <CardDescription>{exp.position}</CardDescription>
                      </Card>
                    </CarouselItem>
                  </motion.div>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;

