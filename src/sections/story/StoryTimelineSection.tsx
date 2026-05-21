"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import MemoryCard from "@/components/story/MemoryCard";

import MemoryGallerySection from "@/sections/gallery/MemoryGallerySection";

import FutureTogetherSection from "@/sections/future/FutureTogetherSection";

import { storyMemories } from "@/data/storyMemories";
import { storyImagesBySlug, storySongsBySlug } from "@/data/storyMedia.generated";

const memories = storyMemories.map((memory) => ({
  title: memory.title,
  text: memory.text,
  images: storyImagesBySlug[memory.slug] ?? [],
  song: storySongsBySlug[memory.slug] ?? `/music/story/${memory.slug}/song.mp3`,
  quote: memory.quote,
}));

export default function StoryTimelineSection() {

  const [showFuture, setShowFuture] = useState(false);

  if (showFuture) {
    return (
      <FutureTogetherSection
        onReturnHome={() => {
          window.location.href = "/";
        }}
      />
    );
  }

  return (

    <>

      <section className="relative overflow-hidden bg-black px-6 py-40">

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#120018] to-black" />

        {/* MEMORIES */}
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-52">

          {memories.map((memory, index) => (

            <MemoryCard
              key={memory.title}
              title={memory.title}
              text={memory.text}
              images={memory.images}
              song={memory.song}
              quote={memory.quote}
              reverse={index % 2 !== 0}
            />

          ))}

        </div>

        {/* HUGE SEPARATION */}
        <div className="h-[500px]" />

        {/* NEW PAGE FEEL */}
        <motion.div

          initial={{
            opacity: 0,
            y: 100,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 1.2,
          }}

          viewport={{
            once: true,
          }}

          className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-6xl
          flex-col
          items-center
          justify-center
          text-center
          "
        >

          {/* GLOW */}
          <div className="absolute h-[500px] w-[500px] rounded-full bg-pink-500/10 blur-3xl" />

          <p className="relative text-2xl text-pink-300 md:text-3xl">

            But Bangara... 🥹💖

          </p>

          <h1
            className="
            relative
            mt-10
            max-w-5xl
            text-5xl
            font-bold
            leading-[1.2]
            text-white
            md:text-8xl
            "
          >

            These Memories
            <br />

            Were Only
            <br />

            The Beginning ✨

          </h1>

          <p
            className="
            relative
            mt-14
            max-w-3xl
            text-xl
            leading-[2]
            text-white/60
            md:text-2xl
            "
          >

            🥹Every picture with you...
            every smile...
            every tiny moment...

            became the most beautiful
            part of my life ❤️

          </p>

          {/* BUTTON */}
          <motion.a

            whileHover={{
              scale: 1.08,
            }}

            whileTap={{
              scale: 0.95,
            }}

            href="#gallery"

            className="
            relative
            mt-16
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

            Enter Gallery ✨

          </motion.a>

        </motion.div>

      </section>

      <MemoryGallerySection onContinue={() => setShowFuture(true)} />

    </>

  );
}
