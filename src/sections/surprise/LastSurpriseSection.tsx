"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { Home } from "lucide-react";

import { SURPRISE_VIDEO_SOURCES } from "@/config/media";

import { pauseForVideo, resumeAfterVideo } from "@/lib/audioManager";

type LastSurpriseSectionProps = {
  onReturnHome?: () => void;
};

export default function LastSurpriseSection({
  onReturnHome,
}: LastSurpriseSectionProps) {

  const videoRef = useRef<HTMLVideoElement>(null);

  const [videoRevealed, setVideoRevealed] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [needsTapToPlay, setNeedsTapToPlay] = useState(false);

  const handleReturnHome = () => {
    if (onReturnHome) {
      onReturnHome();
      return;
    }
    window.location.href = "/";
  };

  const playWithSound = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    video.volume = 1;
    video.defaultMuted = false;

    try {
      await video.play();
      setNeedsTapToPlay(false);
      setVideoError(false);
    } catch {
      setNeedsTapToPlay(true);
    }
  }, []);

  useEffect(() => {
    if (!videoRevealed) return;

    const video = videoRef.current;
    if (!video) return;

    setVideoError(false);
    setNeedsTapToPlay(false);

    const onCanPlay = () => {
      void playWithSound();
    };

    video.addEventListener("canplay", onCanPlay);
    video.load();

    return () => {
      video.removeEventListener("canplay", onCanPlay);
      video.pause();
    };
  }, [videoRevealed, playWithSound]);

  const openVideo = () => {
    pauseForVideo();
    setVideoRevealed(true);
  };

  const closeModal = () => {
    videoRef.current?.pause();
    setVideoRevealed(false);
    setVideoError(false);
    setNeedsTapToPlay(false);
    resumeAfterVideo();
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-6 py-20">

      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/15 via-purple-500/10 to-black" />
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex max-w-3xl flex-col items-center text-center"
      >
        <p className="text-xl text-pink-300">One Last Surprise ✨</p>

        <h1 className="mt-8 text-4xl font-bold leading-tight text-white md:text-6xl">
          Bangara 🥹💋🤍
        </h1>

        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-white/75 md:text-2xl">
          You are my favorite person in this whole world...
          <br />
          and every day with you feels like a gift I never want to end. ❤️
        </p>

        <motion.button
          type="button"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={openVideo}
          className="
          mt-14
          rounded-full
          border
          border-pink-300/30
          bg-white/10
          px-14
          py-5
          text-2xl
          font-semibold
          text-white
          backdrop-blur-2xl
          transition-all
          duration-500
          hover:shadow-[0_0_60px_rgba(236,72,153,0.55)]
          "
        >
          Reveal 🤍
        </motion.button>

        <motion.button
          type="button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          onClick={handleReturnHome}
          aria-label="Return to beginning"
          className="
          mt-20
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          border
          border-pink-300/20
          bg-white/10
          text-white
          backdrop-blur-2xl
          transition-all
          duration-500
          hover:shadow-[0_0_50px_rgba(236,72,153,0.45)]
          "
        >
          <Home size={36} strokeWidth={1.75} />
        </motion.button>

        <p className="mt-4 text-sm text-white/50">Back to the beginning</p>
      </motion.div>

      <AnimatePresence>
        {videoRevealed && (
          <motion.div
            key="video-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeModal}
                className="
                absolute
                -top-12
                right-0
                z-10
                rounded-full
                border
                border-white/20
                bg-white/10
                px-4
                py-2
                text-sm
                text-white
                backdrop-blur-xl
                hover:bg-white/20
                "
              >
                Close ✕
              </button>

              <div className="relative overflow-hidden rounded-3xl border border-pink-300/30 bg-black shadow-[0_0_80px_rgba(236,72,153,0.35)]">
                {videoError ? (
                  <div className="flex min-h-[280px] flex-col items-center justify-center gap-4 px-8 py-12 text-center text-white">
                    <p className="text-xl font-semibold text-pink-300">
                      Video not found
                    </p>
                    <p className="max-w-md text-sm text-white/70">
                      Add your MP4 file here (exact name):
                      <br />
                      <code className="mt-2 block rounded-lg bg-white/10 px-3 py-2 text-pink-200">
                        public/videos/last-surprise.mp4
                      </code>
                    </p>
                    <p className="text-xs text-white/50">
                      Use MP4 (H.264). Restart dev server after adding the file.
                    </p>
                  </div>
                ) : (
                  <>
                    <video
                      ref={videoRef}
                      controls
                      playsInline
                      preload="auto"
                      className="max-h-[85vh] w-full bg-black object-contain"
                      onError={() => setVideoError(true)}
                      onLoadedData={() => setVideoError(false)}
                    >
                      {SURPRISE_VIDEO_SOURCES.map((src) => (
                        <source key={src} src={src} type="video/mp4" />
                      ))}
                    </video>

                    {needsTapToPlay && !videoError && (
                      <button
                        type="button"
                        onClick={() => void playWithSound()}
                        className="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                        bg-black/50
                        text-xl
                        font-semibold
                        text-white
                        "
                      >
                        Tap to play with sound 🔊
                      </button>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
