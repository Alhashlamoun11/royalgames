/** @type {import('next').NextConfig} */

const nextConfig = {

    typescript: {
        ignoreBuildErrors: true,
      },
      env: {
        BACKEND_URL: 'http://173.252.167.140:8080/api',
        NEXT_PUBLIC_API_URL: 'your_api_url',
      },
  
    }

module.exports = nextConfig
