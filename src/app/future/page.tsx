"use client";

import FutureTogetherSection from "@/sections/future/FutureTogetherSection";

export default function FuturePage() {
  return (
    <main className="relative overflow-hidden bg-black">
      <FutureTogetherSection
        onReturnHome={() => {
          window.location.href = "/";
        }}
      />
    </main>
  );
}
