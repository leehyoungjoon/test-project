module.exports = {
  distDir: "./.next",
  reactStrictMode: false,
  swcMinify: true,

  transpilePackages: ["urlencoded-body-parser"],

  compiler: {
    styledComponents: {
      ssr: true,
      pure: true,
      fileName: true,
      displayName: true,
    },
  },
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },

  webpack: (config) => {
    config.resolve.modules = [...config.resolve.modules, "../src"]
    return config
  },

  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
    ]
  },
}
