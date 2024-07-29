"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { fade } from "./variants";

interface ParallaxFadeProps {
  children: ReactNode;
}

export function ParallaxFade({ children }: ParallaxFadeProps) {
  return (
    <motion.div variants={fade} initial="initial" whileInView="open">
      {children}
    </motion.div>
  );
}
