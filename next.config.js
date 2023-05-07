/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

// for adobe spectrum
// add whatever component used
const withTm = require('next-transpile-modules')([
  '@react-spectrum/form',
  '@react-spectrum/icon',
  '@react-spectrum/label',
  '@react-spectrum/layout',
  '@react-spectrum/provider',
  '@react-spectrum/textfield',
  '@react-spectrum/theme-default',
  '@spectrum-icons/ui',
]);

const { i18n } = require('./next-i18next.config');

module.exports = withTm(
  withBundleAnalyzer({
    i18n,
    eslint: {
      dirs: ['.'],
    },
    poweredByHeader: false,
    trailingSlash: true,
    basePath: '',
    // The starter code load resources from `public` folder with `router.basePath` in React components.
    // So, the source code is "basePath-ready".
    // You can remove `basePath` if you don't need it.
    reactStrictMode: true,
    webpack: (config) => {
      config.module.rules.unshift({
        test: /\.html$/i,
        loader: 'html-loader',
      });
      config.module.rules.unshift({
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        use: [{ loader: 'graphql-tag/loader' }],
      });
      return config;
    },
  })
);
