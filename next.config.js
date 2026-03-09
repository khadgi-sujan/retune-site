/** @type {import('next').NextConfig} */
const path = require("path");
const fs = require("fs");
const { version } = JSON.parse(
  fs.readFileSync(path.join(__dirname, "node_modules", "retune", "package.json"), "utf8")
);

const nextConfig = {
  transpilePackages: ["retune"],
  env: {
    RETUNE_VERSION: version,
  },
};

module.exports = nextConfig;
