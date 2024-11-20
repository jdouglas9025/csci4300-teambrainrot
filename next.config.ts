import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**', // Allow any domain
                port: '',
                pathname: '/**', // Allow any pathname
            },
        ],
    },
};

export default nextConfig;