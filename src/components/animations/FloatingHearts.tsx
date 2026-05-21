"use client";

const HEART_COUNT = 12;

const hearts = Array.from({ length: HEART_COUNT }, (_, index) => ({
  id: index,
  left: `${(index * 17 + 5) % 95}%`,
  size: 14 + (index % 5) * 4,
  duration: 12 + (index % 4) * 3,
  delay: (index % 6) * 1.2,
}));

export default function FloatingHearts() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
      aria-hidden
    >
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="floating-heart absolute text-pink-400/40"
          style={{
            left: heart.left,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          ❤️
        </span>
      ))}
    </div>
  );
}
