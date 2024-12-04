"use client";

import avatarImage from "@/app/assets/avatar.png";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { calculateExperience } from "@/utils/calculateExperience";
import { Button } from "./ui/button";
import { AtSign, MapPinHouse, Linkedin, Github, Send } from "lucide-react";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section id="profile" className="pt-12 h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Avatar className="ml-12">
            <AvatarImage
              src={avatarImage.src}
              alt="A picture of Pedro Barbosa"
            />
          </Avatar>
          <div className="pl-24 pr-24">
            <h1 className="text-4xl md:text-6xl font-bold mb-2" >
              Welcome!
            </h1>
            <h2 className="text-4xl md:text-4xl font-bold mb-2" >
              Please, call me Pete.
            </h2>
            <p className="text-lg text-gray-600 mb-2" >
              I'm Pedro Barbosa, a full-stack developer with {calculateExperience()} of experience.
            </p>
            <div className="flex space-x-2 mb-4">
              <MapPinHouse size={22} strokeWidth={0.5} />
              <p className="text-gray-600">Brazil, RJ</p>
            </div>
            <div className="flex space-x-2">
              <a
                className="transition ease-in-out hover:scale-125 duration-300"
                href="https://www.linkedin.com/in/pvbb250689/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} strokeWidth={0.75} />
              </a>
              <a
                className="transition ease-in-out hover:scale-125 duration-300"
                href="https://github.com/petebarbosa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={24} strokeWidth={0.75} />
              </a>
              <a
                className="transition ease-in-out hover:scale-125 duration-300"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <AtSign size={24} strokeWidth={0.75} />
              </a>
              <a
                className="transition ease-in-out hover:scale-125 duration-300"
                href="https://t.me/Pedrovbb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Send size={24} strokeWidth={0.75} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
