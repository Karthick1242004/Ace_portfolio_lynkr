/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'ui.aceternity.com',
            'images.unsplash.com',
            'mineportfolioimages.s3.us-east-2.amazonaws.com',
            'img.freepik.com',
            'cdn4.iconfinder.com'
        ],
        unoptimized: true 
    },
    distDir: "dist",
    output: "export"
};

export default nextConfig;
