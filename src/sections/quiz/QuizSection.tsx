"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import StoryIntroSection from "@/sections/story/StoryIntroSection";

const questions = [

  {
    question: "Who loves more? ❤️",

    options: [
      {
        text: "You",
        reaction: "Obiviously😌❤️ only for My Love .",
      },

      {
        text: "Me",
        reaction: "Awww papu mari pretending to be innocent 😭❤️",
      },

      {
        text: "Both",
        reaction: "Okay fine… equal equal 😭❤️ But I love you more 😌",
      },
    ],
  },

  {
    question: "Who gets angry first? 😂",

    options: [
      {
        text: "You",
        reaction: "Tiny angry bangara but love infinite 🚨❤️🤍",
      },

      {
        text: "Me",
        reaction: "No you only act angry for attention aste😭💋",
      },

      {
        text: "Nobody",
        reaction: "Biggest lie ever detected 😂❤️",
      },
    ],
  },

  {
    question: "Who says sorry first? 🥺",

    options: [
      {
        text: "You",
        reaction: "Because your heart is pure 😭❤️",
      },

      {
        text: "Me",
        reaction: "And that’s why you’re my sweetest princess ❤️💋😽",
      },

      {
        text: "Both",
        reaction: "That’s why we survive every fight 🫂💗❤️",
      },
    ],
  },

  {
    question: "Who is more cute? 😚",

    options: [
      {
        text: "You",
        reaction: "offcourse 😌🖤 World's cutest only prepared for you .",
      },

      {
        text: "Me",
        reaction: "Confidence level infinite 😂❤️but yeah my sweetheart",
      },

      {
        text: "Both",
        reaction: "i knew we r cutest couple😭🫂❤️",
      },
    ],
  },

  {
    question: "Who is more caring? 😚",

    options: [
      {
        text: "You",
        reaction: "offcourse 😌🖤 Attitude .",
      },

      {
        text: "Me",
        reaction: "🤷‍♀️Ok Madammmmmm😡😤",
      },

      {
        text: "Both",
        reaction: "🤍🖤😭its always you",
      },
    ],
  },

];

export default function QuizSection() {

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showReaction, setShowReaction] = useState(false);

  const [reactionText, setReactionText] = useState("");

  const [showStoryIntro, setShowStoryIntro] = useState(false);

  const handleAnswer = (reaction: string) => {

    setReactionText(reaction);

    setShowReaction(true);

    setTimeout(() => {

      setShowReaction(false);

      if (currentQuestion < questions.length - 1) {

        setCurrentQuestion(currentQuestion + 1);

      } else {

        setTimeout(() => {

          setShowStoryIntro(true);

        }, 1200);

      }

    }, 2500);

  };

  if (showStoryIntro) {

    return <StoryIntroSection />;

  }

  return (

    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-black" />

      {/* Glow */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />

      <AnimatePresence mode="wait">

        {!showReaction ? (

          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6 }}
            className="
            relative
            z-10
            w-full
            max-w-3xl
            rounded-[40px]
            border
            border-white/10
            bg-white/10
            p-12
            text-center
            backdrop-blur-2xl
            shadow-[0_0_80px_rgba(236,72,153,0.15)]
            "
          >

            {/* Progress */}
            <div className="mb-8 text-pink-300">

              Question {currentQuestion + 1} / {questions.length}

            </div>

            {/* Question */}
            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">

              {questions[currentQuestion].question}

            </h1>

            {/* OPTIONS */}
            <div className="mt-14 flex flex-col gap-6">

              {questions[currentQuestion].options.map((option, index) => (

                <motion.button
                  key={index}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAnswer(option.reaction)}
                  className="
                  rounded-full
                  border
                  border-pink-300/20
                  bg-white/10
                  px-10
                  py-5
                  text-2xl
                  font-semibold
                  text-white
                  backdrop-blur-2xl
                  transition-all
                  duration-500
                  hover:border-pink-400/40
                  hover:shadow-[0_0_50px_rgba(236,72,153,0.5)]
                  "
                >

                  {option.text}

                </motion.button>

              ))}

            </div>

          </motion.div>

        ) : (

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="
            relative
            z-10
            max-w-3xl
            text-center
            "
          >

            <div className="text-8xl">
              😭❤️
            </div>

            <h1 className="mt-10 text-5xl font-bold leading-tight text-white md:text-7xl">

              {reactionText}

            </h1>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}