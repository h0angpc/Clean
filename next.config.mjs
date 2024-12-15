/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['res.cloudinary.com'], // Thêm domain Cloudinary cho component <Image />
  },

};

export default nextConfig;
