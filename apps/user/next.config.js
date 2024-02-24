const { composePlugins, withNx } = require('@nx/next');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const path = require('path');

// const ROOT_DIR = path.join(__dirname, '../../');
const IS_DEV_MODE = process.env.NODE_ENV === 'development';

// see more detail: https://nextjs.org/docs/advanced-features/security-headers
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Cache-Control',
    value: 's-maxage=2592000, max-age=0',
  },
];

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compiler: {
    ...(!IS_DEV_MODE && {
      reactRemoveProperties: true,
      removeConsole: {
        exclude: ['error'],
      },
    }),
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
  webpack: (config, options) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'user',
        filename: `static/chunks/remoteEntry.js`,
        exposes: {
          './test': path.join(__dirname, 'src/pages/index.tsx'),
        },
        extraOptions: {},
      }),
    );
    return config;
  },
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
