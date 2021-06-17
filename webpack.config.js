module.exports = {
  module: {
    rules: [
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: '[name].[hash:7].[ext]',
        },
      },
    ],
  },
};
