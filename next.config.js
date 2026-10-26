/** @type {import('next').NextConfig} */
const nextConfig = {
    // Static export: the `out/` folder is uploaded as-is to the OVH web hosting.
    output: 'export',
    // Emit `/fr/index.html` instead of `/fr.html` so Apache serves it without rewrites.
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    experimental: {
        // The root layout lives under `[lang]`, so the 404 page needs its own document (app/global-not-found.tsx).
        globalNotFound: true,
    },
};

module.exports = nextConfig;
