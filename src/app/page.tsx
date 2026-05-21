"use client";

import { useEffect } from "react";

import HeroSection from "@/sections/hero/HeroSection";

import AmbientGlow from "@/components/animations/AmbientGlow";
import FloatingHearts from "@/components/animations/FloatingHearts";

import MusicPlayer from "@/components/ui/MusicPlayer";

export default function Home() {

  useEffect(() => {

    // ALWAYS START FROM TOP
    window.history.scrollRestoration = "manual";

    window.scrollTo(0, 0);

  }, []);

  return (

    <main className="relative bg-black">

      <AmbientGlow />
      <FloatingHearts />

      {/* MUSIC */}
      <MusicPlayer />

      {/* MAIN APP */}
      <HeroSection />

    </main>

  );

}