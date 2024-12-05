import { motion } from "motion/react";
import Link from "next/link";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => (
  <motion.div
    whileHover={{ scale: 1.25 }}
    whileTap={{ scale: 0.95 }}
    className="inline-block"
  >
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </Link>
  </motion.div>
);

export default SocialLink;
