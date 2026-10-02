import type { NextConfig } from 'next';

const config: NextConfig = {
  output: 'export',
  // Optional isolated output for local build checks while the preview is running.
  distDir: process.env.NEXT_BUILD_DIR || '.next',
  // This user-site repository and its custom domain are both hosted at the root.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default config;
