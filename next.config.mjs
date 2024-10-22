import MillionLint from "@million/lint";
// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default MillionLint.next({
  enabled: true,
  rsc: true
})(nextConfig);
