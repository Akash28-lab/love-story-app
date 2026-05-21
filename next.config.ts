import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Force Turbopack to use this app folder (not C:\Users\Akash\package-lock.json)
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    // Replaced photos keep the same filename — avoid serving stale optimized copies
    minimumCacheTTL: 60,
    localPatterns: [
      {
        // Allow cache-busting query strings (?v=timestamp) on public images
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
