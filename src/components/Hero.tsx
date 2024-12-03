"use client";

import avatarImage from "@/app/assets/avatar.png";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { calculateExperience } from "@/utils/calculateExperience";
import { Button } from "./ui/button";
import { MapPinHouse } from "lucide-react";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section id="home" className="pt-12 h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Avatar>
            <AvatarImage src={avatarImage.src} alt="A picture of Pedro Barbosa" />
            <AvatarFallback>PB</AvatarFallback>
          </Avatar>
          <div className="pl-24">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, duration: 1 }}
            >
              Welcome!
            </motion.h1>
            <h2 className="text-4xl md:text-4xl font-bold mb-2">
              Please, call me Pete.
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              I'm Pedro Barbosa, a software engineer with {calculateExperience()} of experience.
            </p>
            <div className="flex space-x-2 mb-4">
              <MapPinHouse size={22} strokeWidth={0.5} />
              <p>Brazil, RJ</p>
            </div>
            <Button variant="outline" size="default">Get in touch</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;

