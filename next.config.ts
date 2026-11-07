import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const basePath = isProduction ? "/Raad-Next" : "";

const nextConfig: NextConfig = {
  output: "export",

  basePath,

  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },

  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
