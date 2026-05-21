"use client";

const HEART_COUNT = 20;

const hearts = Array.from({ length: HEART_COUNT }, (_, index) => {
  const left = ((index * 37 + 11) % 88) + 6;
  const drift = index % 2 === 0 ? -28 : 28;

  return {
    id: index,
    left: `${left}%`,
    size: 16 + (index % 6) * 3,
    duration: 14 + (index % 5) * 2,
    delay: index * 1.4,
    drift,
  };
});

export default function FloatingHearts() {
  return (
    <div
      className="floating-hearts-layer pointer-events-none fixed inset-0 z-30"
      aria-hidden
    >
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="floating-heart"
          style={{
            left: heart.left,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            ["--heart-drift" as string]: `${heart.drift}px`,
          }}
        >
          ❤️
        </span>
      ))}
    </div>
  );
}
