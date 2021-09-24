const path = require('path')

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  stories: [
    '../src/**/*.stories.@(ts|tsx|mdx)',
    '../stories/**/*.stories.@(ts|tsx|mdx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'webpack5',
  },
  typescript: {
    check: false,
    reactDocgen: false,
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [{ loader: 'postcss-loader' }],
      include: path.resolve(__dirname, '../'),
    })

    config.resolve.plugins = [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      }),
    ]

    return config
  },
}
