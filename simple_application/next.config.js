/** @type {import('next').NextConfig} */

const isProd = process.env.NEXT_ENV === "production";

const repo = "beta-finance-assignment";
const basePath = `/${repo}`;
const assetPrefix = `/${repo}`;

console.log("process.env.NEXT_ENV", process.env.NEXT_ENV);

const nextConfig = {
  output: "export",
  basePath: isProd ? basePath : "",
  assetPrefix: isProd ? assetPrefix : "",
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
