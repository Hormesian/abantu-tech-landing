/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Redirects for old WordPress content paths (/services, /about, /contact) once the
  // root domain (abantutech.co.ke) is repointed from WordPress to this Vercel app.
  // WordPress now serves the same content at go.abantutech.co.ke. Until the domain
  // cutover happens, these rules are inert — they only fire for requests to this app's
  // production domain paths, which nothing currently points at (preview/.vercel.app
  // URLs are unaffected). No trailingSlash override is set in this repo, so Next's
  // default (trailingSlash: false) already normalises e.g. /services/ -> /services
  // before these rules are evaluated — no separate trailing-slash entries needed.
  async redirects() {
    return [
      {
        source: "/services",
        destination: "https://go.abantutech.co.ke/services",
        permanent: true,
      },
      {
        source: "/services/:path*",
        destination: "https://go.abantutech.co.ke/services/:path*",
        permanent: true,
      },
      {
        source: "/about",
        destination: "https://go.abantutech.co.ke/about",
        permanent: true,
      },
      {
        source: "/about/:path*",
        destination: "https://go.abantutech.co.ke/about",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "https://go.abantutech.co.ke/contact",
        permanent: true,
      },
      {
        source: "/contact/:path*",
        destination: "https://go.abantutech.co.ke/contact",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
