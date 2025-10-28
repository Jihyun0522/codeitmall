/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/products/:id",
        destination: "/items/:id",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com",
        port: "",
        pathname: "/codeitmall/**",
      },
    ],
  },
};

export default nextConfig;
