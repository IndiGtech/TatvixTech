/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  // Ensure server-only environment variables don't leak to client
  env: {},
  // Only expose NEXT_PUBLIC_ variables to client
  publicRuntimeConfig: {},
  serverRuntimeConfig: {
    // Server-only variables
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASSWORD: process.env.SMTP_PASSWORD,
    SMTP_PORT: process.env.SMTP_PORT,
    CONTACT_EMAIL: process.env.CONTACT_EMAIL,
  },
}

module.exports = nextConfig