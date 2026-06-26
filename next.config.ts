import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      // Marka revizyonu (2026-06-16) — menü rotaları yeniden adlandırıldı.
      { source: "/hakkimizda", destination: "/cavearts", permanent: true },
      { source: "/projeler", destination: "/projelerimiz", permanent: true },
      { source: "/projeler/:path*", destination: "/projelerimiz/:path*", permanent: true },
      { source: "/icgoruler", destination: "/haberler", permanent: true },
      { source: "/icgoruler/:path*", destination: "/haberler/:path*", permanent: true },
      { source: "/blog", destination: "/haberler", permanent: true },
      { source: "/blog/:path*", destination: "/haberler/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
