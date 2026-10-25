/** @type {import('next').NextConfig} */
const nextConfig = {
    // Static export: the `out/` folder is uploaded as-is to the OVH web hosting.
    output: 'export',
    // Emit `/fr/index.html` instead of `/fr.html` so Apache serves it without rewrites.
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
