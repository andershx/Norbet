/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { serverActions: { bodySizeLimit: '2mb' } },
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/api/webhooks/:path*",
        headers: [{ key: "Content-Type", value: "application/json" }],
      },
    ];
  },
};
export default nextConfig;
