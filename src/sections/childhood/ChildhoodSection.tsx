"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules";

import QuizSection from "@/sections/quiz/QuizSection";

import "swiper/css";

export default function ChildhoodSection() {

  const [showQuiz, setShowQuiz] = useState(false);

  const images = [
    "/images/childhood/1.png",
    "/images/childhood/2.png",
    "/images/childhood/3.png",
    "/images/childhood/4.png",
    "/images/childhood/5.png",
  ];

  if (showQuiz) {
    return <QuizSection />;
  }

  return (

    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-black" />

      {/* Glow */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />

      {/* Main */}
      <div className="relative z-10 grid max-w-7xl items-center gap-20 md:grid-cols-2">

        {/* IMAGE SLIDER */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="flex justify-center"
        >

          <div
            className="
            relative
            h-[650px]
            w-[420px]
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            shadow-[0_0_60px_rgba(236,72,153,0.3)]
            "
          >

            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              loop={true}
              allowTouchMove={true}
              simulateTouch={true}
              grabCursor={false}
              speed={1200}
              slidesPerView={1}
              spaceBetween={0}
              className="h-full w-full"
            >

              {images.map((image, index) => (

                <SwiperSlide key={index}>

                  <div className="relative h-full w-full">

                    <Image
                      src={image}
                      alt="Memory"
                      fill
                      className="object-cover"
                    />

                  </div>

                </SwiperSlide>

              ))}

            </Swiper>

          </div>

        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center md:text-left"
        >

          <p className="mb-6 text-xl text-pink-300">
            Once upon a time... 🌸
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">

            A Little Princess
            <br />

            Entered This World ❤️

          </h1>

          <p className="mt-10 text-xl leading-relaxed text-white/70">

            And years later...
            she became the most beautiful,
            precious, lovable person in my life.

            <br /><br />

            Every smile of yours became my peace.
            Every moment with you became my favorite memory.

          </p>

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowQuiz(true)}
            className="
            mt-12
            rounded-full
            border
            border-pink-300/20
            bg-white/10
            px-10
            py-5
            text-xl
            font-semibold
            text-white
            backdrop-blur-2xl
            transition-all
            duration-500
            hover:shadow-[0_0_50px_rgba(236,72,153,0.5)]
            "
          >

          Let's have some fun! 🎉

          </motion.button>

        </motion.div>

      </div>

    </section>
  );
}