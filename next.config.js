// module.exports  = {
//   images: {
//     unoptimized: true,
//     domains: [
//       'res.cloudinary.com',
//       'avatars.githubusercontent.com',
//       'imgur.com',
//       'cdn.discordapp.com',
//     ],
//   },
// }

/** @type {import('next').NextConfig} */

module.exports = {
  // output: 'export',
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "imgur.com",
      },
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
      },
      {
        protocol: "https",
        hostname: "media.discordapp.net",
      },
      {
        protocol: "https",
        hostname: "camo.githubusercontent.com",
      }
    ],
  },
};