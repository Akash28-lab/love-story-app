"use client";

import { motion } from "framer-motion";

const HEARTS = [
  { id: 1, left: "6%", size: 22, duration: 16, delay: 0, emoji: "❤️" },
  { id: 2, left: "14%", size: 18, duration: 13, delay: 2, emoji: "💕" },
  { id: 3, left: "22%", size: 26, duration: 18, delay: 1, emoji: "💖" },
  { id: 4, left: "30%", size: 20, duration: 15, delay: 4, emoji: "❤️" },
  { id: 5, left: "38%", size: 24, duration: 17, delay: 0.5, emoji: "💗" },
  { id: 6, left: "46%", size: 19, duration: 14, delay: 3, emoji: "❤️" },
  { id: 7, left: "54%", size: 25, duration: 19, delay: 1.5, emoji: "💕" },
  { id: 8, left: "62%", size: 18, duration: 12, delay: 5, emoji: "💖" },
  { id: 9, left: "70%", size: 22, duration: 16, delay: 2.5, emoji: "❤️" },
  { id: 10, left: "78%", size: 20, duration: 14, delay: 6, emoji: "💗" },
  { id: 11, left: "86%", size: 24, duration: 18, delay: 3.5, emoji: "💕" },
  { id: 12, left: "94%", size: 21, duration: 15, delay: 7, emoji: "❤️" },
  { id: 13, left: "10%", size: 20, duration: 17, delay: 8, emoji: "💖" },
  { id: 14, left: "26%", size: 24, duration: 13, delay: 9, emoji: "❤️" },
  { id: 15, left: "42%", size: 22, duration: 16, delay: 10, emoji: "💕" },
  { id: 16, left: "58%", size: 26, duration: 14, delay: 11, emoji: "💖" },
  { id: 17, left: "74%", size: 19, duration: 18, delay: 12, emoji: "💗" },
  { id: 18, left: "90%", size: 23, duration: 15, delay: 13, emoji: "❤️" },
] as const;

export default function FloatingHearts() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {HEARTS.map((heart) => (
        <motion.span
          key={heart.id}
          className="absolute opacity-40 will-change-transform"
          style={{
            left: heart.left,
            fontSize: heart.size,
          }}
          initial={{ y: "105vh", opacity: 0 }}
          animate={{ y: "-20vh", opacity: [0, 0.45, 0.45, 0] }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {heart.emoji}
        </motion.span>
      ))}
    </div>
  );
}
