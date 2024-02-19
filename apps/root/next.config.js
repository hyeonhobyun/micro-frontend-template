//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const path = require('path');
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const stylexPlugin = require('@stylexjs/nextjs-plugin');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
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
