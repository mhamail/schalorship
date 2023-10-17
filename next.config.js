/** @type {import('next').NextConfig} */
const nextConfig = {
    API: "http://localhost:3000/api",
    experimental: {
        serverActions: true,
    },
    images: {}
}

module.exports = nextConfig
