import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'olxwzgxszqzlanhykudq.supabase.co',
      },
    ],
  },
};

export default nextConfig;
