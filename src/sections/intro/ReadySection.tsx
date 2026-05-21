"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import ChildhoodSection from "@/sections/childhood/ChildhoodSection";

export default function ReadySection() {

  const [yesClicked, setYesClicked] = useState(false);

  const [showChildhood, setShowChildhood] = useState(false);

  const [noPosition, setNoPosition] = useState({
    x: 140,
    y: 0,
  });

  const moveNoButton = () => {

    setNoPosition({
      x: Math.random() * 300 - 150,
      y: Math.random() * 200 - 100,
    });

  };

  if (showChildhood) {
    return <ChildhoodSection />;
  }

  return (

    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-black" />

      {!yesClicked ? (

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex flex-col items-center text-center"
        >

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">

            Are You Ready Baby? ❤️

          </h1>

          <p className="mt-8 max-w-2xl text-xl text-white/70 md:text-2xl">

            I made something beautiful and special only for you...

          </p>

          {/* BUTTON AREA */}
          <div className="relative mt-16 flex items-center justify-center gap-10">

            {/* YES BUTTON */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setYesClicked(true)}
              className="
              group
              relative
              overflow-hidden
              rounded-full
              border
              border-pink-300/20
              bg-white/10
              px-14
              py-5
              text-2xl
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
                YES ❤️
              </span>

            </motion.button>

            {/* NO BUTTON */}
            <motion.button

              onMouseEnter={moveNoButton}

              onClick={moveNoButton}

              animate={{
                x: noPosition.x,
                y: noPosition.y,
              }}

              transition={{
                type: "spring",
                stiffness: 300,
                damping: 12,
              }}

              className="
              absolute
              rounded-full
              border
              border-white/20
              bg-white/10
              px-10
              py-4
              text-xl
              text-white
              backdrop-blur-2xl
              transition-all
              duration-300
              hover:bg-white/20
              "
            >

              NO 😭

            </motion.button>

          </div>

        </motion.div>

      ) : (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative z-10 text-center"
        >

          <div className="text-9xl">
            🥺💖
          </div>

          <h1 className="mt-10 text-6xl font-bold text-white">

            Yeah baby...

          </h1>

          <p className="mt-6 text-3xl text-pink-300">

            I knew you would say YES 😘

          </p>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowChildhood(true)}
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

            Continue✨

          </motion.button>

        </motion.div>

      )}

    </section>
  );
}