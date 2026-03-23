/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  // Ensure server-only environment variables don't leak to client
  env: {},
}

module.exports = nextConfig