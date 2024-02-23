const { composePlugins, withNx } = require('@nx/next');
const path = require('path');
const stylexPlugin = require('@stylexjs/nextjs-plugin');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const SpriteSmithPlugin = require('webpack-spritesmith');
const fs = require('fs');

const ROOT_DIR = path.join(__dirname, '../../');
const IS_DEV_MODE = process.env.NODE_ENV === 'development';

const getSpriteSmithPlugin = (dirNames) => {
  return dirNames.map((dir) => {
    return new SpriteSmithPlugin({
      src: {
        cwd: path.join(ROOT_DIR, `libs/assets/src/sprites/${dir}`),
        glob: '**/*.png',
      },
      target: {
        image: path.join(
          ROOT_DIR,
          `apps/root/public/images/sprites/sprite-${dir}.generated.png`,
        ),
        css: [
          [
            path.join(
              ROOT_DIR,
              `libs/assets/dist/sprites/sprite-${dir}.generated.json`,
            ),
            {
              format: 'json_array',
            },
          ],
        ],
      },
      apiOptions: {
        cssImageRef: `/images/sprites/sprite-${dir}.generated.png`,
      },
      spritesmithOptions: {
        algorithm: 'top-down',
        padding: 15,
      },
    });
  });
};

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
        name: 'root',
        filename: `static/chunks/remoteEntry.js`,
        remotes: {
          user: `user@http://localhost:4201/_next/static/chunks/remoteEntry.js`,
        },
        exposes: {},
        shared: {},
        extraOptions: {},
      }),
    );

    config.plugins.push(
      ...getSpriteSmithPlugin(
        fs
          .readdirSync(path.join(ROOT_DIR, `libs/assets/src/sprites`))
          .filter((dir) => !dir.match(/(^\.|\b\.json)/)),
      ),
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
  stylexPlugin({
    aliases: {
      '@/*': [path.join(__dirname, '*')],
    },
    rootDir: __dirname,
  }),
];

module.exports = composePlugins(...plugins)(nextConfig);
