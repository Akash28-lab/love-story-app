"use client";

import { memo } from "react";

import Image from "next/image";

import { motion } from "framer-motion";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  Autoplay,
} from "swiper/modules";

import "swiper/css";

import { playStorySong } from "@/lib/audioManager";

type MemoryCardProps = {
  title: string;
  text: string;
  images: string[];
  song: string;
  quote: string;
  reverse?: boolean;
};

function MemoryCard({
  title,
  text,
  images,
  song,
  quote,
  reverse = false,
}: MemoryCardProps) {

  const playSong = () => {
    playStorySong(song).catch(console.error);
  };

  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 80,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 0.6,
      }}

      viewport={{
        once: true,
        amount: 0.2,
      }}

      className={`
        grid
        items-center
        gap-16
        md:grid-cols-2
        ${reverse ? "md:[&>*:first-child]:order-2" : ""}
      `}
    >

      {/* IMAGE SECTION */}
      <div
        className="
        relative
        h-[520px]
        overflow-hidden
        rounded-[35px]
        border
        border-white/10
        bg-black
        shadow-[0_0_80px_rgba(236,72,153,0.15)]
        "
      >

        <Swiper

          modules={[Autoplay]}

          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}

          loop={true}

          speed={1200}

          grabCursor={true}

          slidesPerView={1}

          className="h-full w-full"
        >

          {images.map((image, index) => (

            <SwiperSlide key={image}>

              <div className="relative h-full w-full">

                <Image
                  src={image}
                  alt={title}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="
                  object-cover
                  transition-transform
                  duration-500
                  hover:scale-105
                  "
                />

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

        {/* OVERLAY */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* MUSIC BUTTON */}
        <button

          onClick={playSong}

          className="
          absolute
          bottom-5
          right-5
          z-20
          rounded-full
          bg-black/40
          px-5
          py-2
          text-sm
          text-white
          backdrop-blur-md
          transition-all
          duration-300
          hover:bg-pink-500/30
          "
        >

          🎵 Play Music

        </button>

      </div>

      {/* TEXT */}
      <div>

        <p className="text-lg text-pink-300">

          Our Memory ✨

        </p>

        <h1
          className="
          mt-6
          text-5xl
          font-bold
          leading-tight
          text-white
          md:text-6xl
          "
        >

          {title}

        </h1>

        <p
          className="
          mt-10
          text-2xl
          leading-relaxed
          text-white/70
          "
        >

          {text}

        </p>

        {/* QUOTE */}
        <p className="mt-8 text-xl italic text-pink-200">

          "{quote}"

        </p>

        {/* BUTTON */}
        <motion.button

          whileHover={{
            scale: 1.04,
          }}

          whileTap={{
            scale: 0.96,
          }}

          onClick={playSong}

          className="
          mt-10
          rounded-full
          border
          border-pink-300/20
          bg-white/10
          px-8
          py-4
          text-lg
          text-white
          backdrop-blur-xl
          transition-all
          duration-500
          hover:bg-pink-500/10
          hover:shadow-[0_0_50px_rgba(236,72,153,0.35)]
          "
        >

          🎵 Tap To Hear What My Heart Felt

        </motion.button>

      </div>

    </motion.div>

  );

}

export default memo(MemoryCard);