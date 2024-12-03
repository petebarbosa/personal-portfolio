"use client";

import { Mouse } from "lucide-react";
import { motion } from "motion/react";

interface FloatingMouseProps {
  hidden: boolean;
}

export const FloatingMouse = ({ hidden }: FloatingMouseProps) => {
  return (
    <motion.div
      className={`fixed z-50 bottom-4 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${hidden ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      initial={{ y: 0 }}
      animate={{ y: [0, -10, 0] }} // Moves up and down
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Mouse size={22} strokeWidth={0.5} />
    </motion.div>
  )
}
