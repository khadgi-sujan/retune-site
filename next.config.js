/** @type {import('next').NextConfig} */
const { version } = require("./node_modules/retune/package.json");

const nextConfig = {
  transpilePackages: ["retune"],
  env: {
    RETUNE_VERSION: version,
  },
};

module.exports = nextConfig;
