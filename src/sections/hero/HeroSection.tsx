"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import ReadySection from "@/sections/intro/ReadySection";

import { startBackgroundMusic } from "@/lib/audioManager";

export default function HeroSection() {

  const [startStory, setStartStory] = useState(false);

  if (startStory) {
    return <ReadySection />;
  }

  return (

    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/10 to-transparent blur-3xl" />

      {/* Floating Blur Circles */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl" />

      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8 }}
        className="relative z-10 text-center"
      >

        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.5,
          }}
          className="text-5xl font-bold leading-tight md:text-7xl"
        >

          Happiest Birthday

          <br />

          <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            To My Beautiful Girl ❤️
          </span>

        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
            duration: 2,
          }}
          className="mx-auto mt-8 max-w-2xl text-lg text-white/70 md:text-2xl"
        >

          Every moment with you became my favorite memory.

        </motion.p>

        {/* PREMIUM BUTTON */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setStartStory(true);
            void startBackgroundMusic();
          }}
          className="
          group
          relative
          mt-10
          overflow-hidden
          rounded-full
          border
          border-pink-300/20
          bg-white/10
          px-12
          py-5
          text-xl
          font-semibold
          text-white
          backdrop-blur-2xl
          transition-all
          duration-500
          hover:scale-110
          hover:border-pink-400/40
          hover:shadow-[0_0_60px_rgba(236,72,153,0.6)]
          "
        >

          {/* Glow Layer */}
          <div
            className="
            absolute
            inset-0
            bg-gradient-to-r
            from-pink-500/20
            via-purple-500/20
            to-pink-500/20
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
            "
          />

          <span className="relative z-10">
            ✨ Start Our Love Story
          </span>

        </motion.button>

      </motion.div>

    </section>
  );
}