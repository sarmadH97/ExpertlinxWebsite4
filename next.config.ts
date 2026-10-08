import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  agentRules: false,
  typescript: {
    ignoreBuildErrors: process.env.CODEX_SANDBOX_BUILD === "1",
  },
  experimental:
    process.env.CODEX_SANDBOX_BUILD === "1"
      ? { workerThreads: true, cpus: 1, useTypeScriptCli: true }
      : {},
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
