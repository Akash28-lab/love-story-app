"use client";

import Image from "next/image";

import { motion } from "framer-motion";

const galleryImages = Array.from(
  { length: 126 },
  (_, i) => `/images/gallery/${i + 1}.jpeg`
);

type MemoryGallerySectionProps = {
  onContinue?: () => void;
};

export default function MemoryGallerySection({
  onContinue,
}: MemoryGallerySectionProps) {

  return (

    <section
      id="gallery"
      className="
      relative
      overflow-hidden
      bg-transparent
      px-6
      py-40
      "
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-[#140014]/95 to-black/90" />

      {/* LIGHT GLOW */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1800px]">

        {/* HEADING */}
        <motion.div

          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
          }}

          viewport={{
            once: true,
          }}

          className="mb-24 text-center"
        >

          <p className="text-2xl text-pink-300">

            Our Beautiful Gallery ✨

          </p>

          <h1
            className="
            mt-6
            text-5xl
            font-bold
            leading-tight
            text-white
            md:text-7xl
            "
          >

            Every Picture
            <br />

            Holds A Piece
            <br />

            Of My Heart ❤️

          </h1>

        </motion.div>

        {/* PREMIUM GRID */}
        <div
          className="
          grid
          grid-cols-2
          gap-4
          md:grid-cols-4
          "
        >

          {galleryImages.map((image, index) => (

            <div

              key={index}

              className="
              group
              relative
              aspect-square
              overflow-hidden
              rounded-[26px]
              border
              border-white/10
              bg-[#120012]
              [content-visibility:auto]
              "
            >

              <Image
                src={image}
                alt="Memory"
                fill
                loading="lazy"
                quality={65}
                sizes="(max-width: 768px) 50vw, 25vw"
                className="
                object-cover
                transition-transform
                duration-700
                ease-out
                group-hover:scale-110
                "
              />

              {/* CINEMATIC OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-70" />

              {/* GLOW BORDER */}
              <div
                className="
                absolute
                inset-0
                rounded-[26px]
                ring-1
                ring-white/5
                transition-all
                duration-500
                group-hover:ring-pink-300/20
                "
              />

            </div>

          ))}

        </div>

        {/* FUTURE MESSAGE */}
        {/* NEXT BUTTON */}
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
    duration: 1,
  }}

  viewport={{
    once: true,
  }}

  className="
  mt-40
  flex
  justify-center
  "
>

  <motion.button
    type="button"
    onClick={onContinue}
    whileHover={{
      scale: 1.1,
      x: 10,
    }}
    whileTap={{
      scale: 0.92,
    }}
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

      </div>

    </section>

  );

}