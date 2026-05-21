"use client";

import { useEffect } from "react";

import HeroSection from "@/sections/hero/HeroSection";

import FloatingHearts from "@/components/animations/FloatingHearts";
import PageContent from "@/components/animations/PageContent";

import MusicPlayer from "@/components/ui/MusicPlayer";

export default function Home() {

  useEffect(() => {

    // ALWAYS START FROM TOP
    window.history.scrollRestoration = "manual";

    window.scrollTo(0, 0);

  }, []);

  return (

    <main className="relative isolate bg-black">

      <FloatingHearts />

      <PageContent>
        <HeroSection />
      </PageContent>

      <MusicPlayer />

    </main>

  );

}