// next.config.mjs
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'react-deploy'; // Remplace par le nom de ton dépôt GitHub

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: isProd ? `/${repoName}/` : '',
  basePath: isProd ? `/${repoName}` : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
