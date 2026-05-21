"use client";

import { motion } from "framer-motion";

import { useState } from "react";

import StoryTimelineSection from "./StoryTimelineSection";

export default function StoryIntroSection() {

  const [start, setStart] = useState(false);

  if (start) {

    return <StoryTimelineSection />;

  }

  return (

    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">

      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#140018] to-black" />

      {/* GLOW */}
      <div className="absolute h-[500px] w-[500px] rounded-full bg-pink-500/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center"
      >

        <p className="text-2xl text-pink-300">

          Bangara 🥹💋🤍

        </p>

        <h1 className="mt-8 max-w-5xl text-5xl font-bold leading-tight text-white md:text-7xl">

          Are You Ready
          <br />

          To Cherish
          <br />

          Our Memories Back? ❤️

        </h1>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setStart(true)}
          className="
          mt-14
          rounded-full
          border
          border-pink-300/20
          bg-white/10
          px-12
          py-5
          text-2xl
          font-semibold
          text-white
          backdrop-blur-2xl
          transition-all
          duration-500
          hover:shadow-[0_0_60px_rgba(236,72,153,0.5)]
          "
        >

          Explore Memories ✨

        </motion.button>

      </motion.div>

    </section>
  );
}