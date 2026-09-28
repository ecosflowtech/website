import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Imagem enxuta para a VPS: só o servidor e o que ele usa.
  output: "standalone",
  poweredByHeader: false,
};

export default nextConfig;
