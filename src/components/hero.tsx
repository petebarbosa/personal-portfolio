"use client";

import avatarImage from "@/app/assets/avatar.png";
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { calculateExperience } from "@/utils/calculateExperience";
import { AtSign, MapPinHouse, Linkedin, Github, Send, Scale } from "lucide-react";
import SocialLink from "@/components/ui/socialLink";


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
              <SocialLink
                href="https://www.linkedin.com/in/pvbb250689/"
                icon={<Linkedin size={30} strokeWidth={0.75} />}
              />
              <SocialLink
                href="https://github.com/petebarbosa"
                icon={<Github size={30} strokeWidth={0.75} />}
              />
              <SocialLink
                href=""
                icon={<AtSign size={30} strokeWidth={0.75} />}
              />
              <SocialLink
                href="https://t.me/Pedrovbb"
                icon={<Send size={30} strokeWidth={0.75} />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
