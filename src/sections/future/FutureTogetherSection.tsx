"use client";

import { useState } from "react";

import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";

import { WEDDING_BG_VIDEO } from "@/config/media";

import LastSurpriseSection from "@/sections/surprise/LastSurpriseSection";

type FutureTogetherSectionProps = {
  onReturnHome?: () => void;
};

export default function FutureTogetherSection({
  onReturnHome,
}: FutureTogetherSectionProps) {

  const [opened, setOpened] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);

  const handleReturnHome = () => {
    if (onReturnHome) {
      onReturnHome();
      return;
    }
    window.location.href = "/";
  };

  if (showSurprise) {
    return <LastSurpriseSection onReturnHome={handleReturnHome} />;
  }

  return (

    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20">

      {/* VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="
        absolute
        inset-0
        h-full
        w-full
        object-cover
        blur-xl
        brightness-50
        opacity-30
        "
      >
        <source src={WEDDING_BG_VIDEO} type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      <AnimatePresence mode="wait">

        {!opened ? (

          <motion.div
            key="closed"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 flex flex-col items-center text-center"
          >

            {/* TEXT */}
            <div className="mb-12">

              <p className="text-xl text-pink-300">

                One Last Wish 🤍

              </p>

              <h1 className="mt-6 text-3xl font-bold leading-tight text-white md:text-4xl">

                Let's End Up
                <br />
                Like This... 🥹

              </h1>

              <p className="mt-8 text-2xl text-white/70">

                There’s Something
                <br />

                I Want To Show You ❤️

              </p>
              <br />
                <p className="text-lg text-white/70">
                Tappp me!!
                </p>

            </div>

            {/* ENVELOPE */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpened(true)}
              className="
              relative
              flex
              h-[220px]
              w-[320px]
              cursor-pointer
              items-center
              justify-center
              rounded-2xl
              border
              border-[#d4af37]/40
              bg-gradient-to-br
              from-[#fff6ef]
              via-white
              to-[#fff0f5]
              shadow-[0_0_80px_rgba(236,72,153,0.25)]
              "
            >

              {/* FLAP */}
              <div className="
              absolute
              top-0
              h-0
              w-0
              border-l-[160px]
              border-r-[160px]
              border-t-[110px]
              border-l-transparent
              border-r-transparent
              border-t-[#f6c6d3]
              "
              />

              {/* HEART */}
              <div className="
              relative
              z-10
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-full
              bg-pink-500
              text-4xl
              shadow-xl
              "
              >

                ❤️

              </div>

            </motion.div>

          </motion.div>

        ) : (

          <motion.div
            key="opened"
            initial={{ opacity: 0, y: 120 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="
            relative
            z-10
            w-full
            max-w-4xl
            rounded-[40px]
            border-[3px]
            border-[#d4af37]
            bg-gradient-to-br
            from-[#fffaf5]
            via-white
            to-[#fff5f7]
            p-3
            shadow-[0_0_120px_rgba(212,175,55,0.35)]
            "
          >

            {/* INNER PREMIUM BORDER */}
            <div className="
            rounded-[32px]
            border-[2px]
            border-[#e7c86e]
            bg-white
            p-8
            "
            >

              {/* DECORATIVE BORDER */}
              <div className="
              rounded-[28px]
              border
              border-dashed
              border-[#d4af37]/50
              p-6
              "
              >

                {/* INVITATION LAYOUT */}
                <div className="grid gap-8 md:grid-cols-2">

                  {/* LEFT SIDE COLLAGE */}
                  <div className="relative h-[500px]">

                    {/* PHOTO 1 */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="
                      absolute
                      left-2
                      top-2
                      h-[220px]
                      w-[160px]
                      overflow-hidden
                      rounded-2xl
                      border-[6px]
                      border-white
                      shadow-2xl
                      "
                    >

                      <Image
                        src="/images/childhood/couple/1.png"
                        alt="Couple"
                        fill
                        className="object-cover"
                      />

                    </motion.div>

                    {/* PHOTO 2 */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="
                      absolute
                      left-[175px]
                      top-2
                      h-[220px]
                      w-[140px]
                      overflow-hidden
                      rounded-2xl
                      border-[6px]
                      border-white
                      shadow-2xl
                      "
                    >

                      <Image
                        src="/images/childhood/couple/2.png"
                        alt="Couple"
                        fill
                        className="object-cover"
                      />

                    </motion.div>

                    {/* PHOTO 3 */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="
                      absolute
                      left-2
                      bottom-2
                      h-[220px]
                      w-[160px]
                      overflow-hidden
                      rounded-2xl
                      border-[6px]
                      border-white
                      shadow-2xl
                      "
                    >

                      <Image
                        src="/images/childhood/couple/3.png"
                        alt="Couple"
                        fill
                        className="object-cover"
                      />

                    </motion.div>

                    {/* PHOTO 4 */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="
                      absolute
                      left-[175px]
                      bottom-2
                      h-[220px]
                      w-[140px]
                      overflow-hidden
                      rounded-2xl
                      border-[6px]
                      border-white
                      shadow-2xl
                      "
                    >

                      <Image
                        src="/images/childhood/couple/4.png"
                        alt="Couple"
                        fill
                        className="object-cover"
                      />

                    </motion.div>

                  </div>

                  {/* RIGHT SIDE TEXT */}
                  <div className="flex flex-col justify-center text-center text-black">

                    <p className="text-sm tracking-[8px] text-[#b58b2a]">

                      SAVE THE DATE

                    </p>

                    <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

                    <h1 className="mt-8 text-5xl font-serif italic leading-tight text-[#2d1b1b]">

                      Akash A R

                      <br />

                      <span className="text-[#d4af37]">
                        &
                      </span>

                      <br />

                      BinduShree S J

                    </h1>

                    <p className="mt-8 text-lg leading-relaxed text-gray-600">

                      Together Forever ❤️

                      <br /><br />

                      A new chapter begins with love, laughter, madness, and forever memories.
                  We would be delighted to have your presence and blessings on our special day.

                    </p>

                    <div className="mt-10">

                      <h2 className="text-3xl font-serif text-[#2d1b1b]">

                        Lalitha Mahal Palace

                      </h2>

                      <p className="mt-2 text-lg text-[#b58b2a]">

                        Mysore ✨

                      </p>

                    </div>

                    <div className="mt-10 h-[1px] w-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

                    <p className="mt-8 text-sm tracking-[5px] text-gray-500">

                      FOREVER BEGINS HERE

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

      {opened && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="relative z-20 mt-12"
        >
          <motion.button
            type="button"
            onClick={() => setShowSurprise(true)}
            whileHover={{ scale: 1.1, x: 10 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Continue to last surprise"
            className="
            flex
            h-24
            w-24
            cursor-pointer
            items-center
            justify-center
            rounded-full
            border
            border-pink-300/20
            bg-white/10
            text-5xl
            text-white
            backdrop-blur-2xl
            transition-all
            duration-500
            hover:shadow-[0_0_60px_rgba(236,72,153,0.5)]
            "
          >
            →
          </motion.button>
        </motion.div>
      )}

    </section>
  );
}