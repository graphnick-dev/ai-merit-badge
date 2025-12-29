"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedListItemProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedListItem({ children, className, delay = 0 }: AnimatedListItemProps) {
  return (
    <motion.li
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.li>
  );
}