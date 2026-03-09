/** @type {import('next').NextConfig} */
const path = require("path");
const fs = require("fs");
let version = "0.4.0";
try {
  const pkg = JSON.parse(
    fs.readFileSync(path.join(__dirname, "node_modules", "retune", "package.json"), "utf8")
  );
  version = pkg.version;
} catch {}

const nextConfig = {
  transpilePackages: ["retune"],
  env: {
    RETUNE_VERSION: version,
  },
};

module.exports = nextConfig;
