"use client";

import { useEffect, useState } from "react";

import {
  isBgmPlaying,
  subscribeToAudioChanges,
  toggleBgm,
} from "@/lib/audioManager";

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    return subscribeToAudioChanges(() => {
      setPlaying(isBgmPlaying());
    });
  }, []);

  const toggleMusic = async () => {
    try {
      await toggleBgm();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      onClick={toggleMusic}
      className="
        fixed
        bottom-6
        right-6
        z-50
        rounded-full
        border
        border-white/20
        bg-white/10
        px-5
        py-3
        text-white
        backdrop-blur-xl
        transition-all
        duration-300
        hover:scale-110
      "
    >
      {playing ? "Pause Music 🎵" : "Play Music ❤️"}
    </button>
  );
}
