import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'media.licdn.com', 
      'avatars.githubusercontent.com',
      'raw.githubusercontent.com'
    ],
  },
};

export default nextConfig;
