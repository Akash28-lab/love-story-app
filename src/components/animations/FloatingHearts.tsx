"use client";

import { motion } from "framer-motion";

const HEARTS = [
  { id: 1, left: "6%", size: 26, duration: 16, delay: 0, emoji: "❤️" },
  { id: 2, left: "14%", size: 20, duration: 13, delay: 2, emoji: "💕" },
  { id: 3, left: "22%", size: 32, duration: 18, delay: 1, emoji: "💖" },
  { id: 4, left: "30%", size: 22, duration: 15, delay: 4, emoji: "❤️" },
  { id: 5, left: "38%", size: 28, duration: 17, delay: 0.5, emoji: "💗" },
  { id: 6, left: "46%", size: 24, duration: 14, delay: 3, emoji: "✨" },
  { id: 7, left: "54%", size: 30, duration: 19, delay: 1.5, emoji: "❤️" },
  { id: 8, left: "62%", size: 22, duration: 12, delay: 5, emoji: "💕" },
  { id: 9, left: "70%", size: 26, duration: 16, delay: 2.5, emoji: "💖" },
  { id: 10, left: "78%", size: 20, duration: 14, delay: 6, emoji: "❤️" },
  { id: 11, left: "86%", size: 28, duration: 18, delay: 3.5, emoji: "💗" },
  { id: 12, left: "94%", size: 24, duration: 15, delay: 7, emoji: "✨" },
  { id: 13, left: "10%", size: 22, duration: 17, delay: 8, emoji: "❤️" },
  { id: 14, left: "26%", size: 28, duration: 13, delay: 9, emoji: "💕" },
  { id: 15, left: "42%", size: 24, duration: 16, delay: 10, emoji: "💖" },
  { id: 16, left: "58%", size: 30, duration: 14, delay: 11, emoji: "❤️" },
  { id: 17, left: "74%", size: 22, duration: 18, delay: 12, emoji: "💗" },
  { id: 18, left: "90%", size: 26, duration: 15, delay: 13, emoji: "✨" },
  { id: 19, left: "18%", size: 34, duration: 20, delay: 4.5, emoji: "❤️" },
  { id: 20, left: "50%", size: 36, duration: 21, delay: 6.5, emoji: "💖" },
  { id: 21, left: "82%", size: 32, duration: 19, delay: 8.5, emoji: "💕" },
  { id: 22, left: "34%", size: 22, duration: 12, delay: 14, emoji: "❤️" },
  { id: 23, left: "66%", size: 24, duration: 13, delay: 15, emoji: "💗" },
  { id: 24, left: "48%", size: 28, duration: 17, delay: 16, emoji: "✨" },
] as const;

export default function FloatingHearts() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[45] overflow-hidden"
      aria-hidden
    >
      {HEARTS.map((heart) => (
        <motion.span
          key={heart.id}
          className="absolute will-change-transform"
          style={{
            left: heart.left,
            fontSize: heart.size,
            filter: "drop-shadow(0 0 10px rgba(244, 114, 182, 0.9))",
          }}
          initial={{ y: "105vh", opacity: 0 }}
          animate={{ y: "-20vh", opacity: [0, 1, 1, 0] }}
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
