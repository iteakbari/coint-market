/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.coinmarketads.com",
        port: "",
        pathname: "**",
      },
    ],
  },

  env: {
    NEXT_PUBLIC_API_URL: "https://coinmarketads.com/api",
    // NEXT_PUBLIC_IMAGE_URL: "https://admin.coinmarketads.com/",
    HOSTNAME: "coinmarketads.com",
    URL: "https://coinmarketads.com",
  },
};

export default nextConfig;
