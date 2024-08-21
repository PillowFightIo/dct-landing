/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    basePath: "",
    swcMinify: true,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
