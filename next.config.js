// @ts-nocheck
/* tslint:disable */

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_MAPTILER_API_KEY: process.env.NEXT_PUBLIC_MAPTILER_API_KEY,
    NEXT_PUBLIC_OPEN_CELL_PKEY: process.env.NEXT_PUBLIC_OPEN_CELL_PKEY,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    AI_TEMP: process.env.AI_TEMP,
    AI_MAX_TOKENS: process.env.AI_MAX_TOKENS,
    OPENAI_API_ORG: process.env.OPENAI_API_ORG
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: '/:path*',
        headers: [
          { key: 'access-control-allow-credentials', value: 'true' },
          { key: 'access-control-allow-origin', value: '*' },
          { key: 'access-control-allow-methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
          { key: 'access-control-allow-headers', value: 'origin, content-type, accept, authorization, X-CSRF-Token, X-Requested-With, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version' },
        ]
      }
    ]
  }
}

module.exports = nextConfig