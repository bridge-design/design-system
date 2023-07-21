"use strict";
/*
 * This webpack config is used for production build of components library
 */
const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const paths = {
  libSrc: path.resolve(__dirname, "src"),
  libIndex: [path.resolve(__dirname, "src/index.js")],
  libOutputDir: path.resolve(__dirname, "dist"),
  libModules: path.resolve(__dirname, "../node_modules"),
};

module.exports = (_, argv) => {
  const env = argv.mode;

  process.env.BABEL_ENV = env;

  let libraryName = "design-system";
  let plugins = [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(env),
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css",
      chunkFilename: "styles.css",
    }),
  ];

  return {
    entry: paths.libIndex,
    devtool: "source-map",
    output: {
      path: paths.libOutputDir,
      filename: libraryName + ".js",
      library: {
        type: "commonjs2",
      },
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          /* Don't use style-loader if you will import library into Next.js */
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          // Apply rule for fonts files
          test: /\.(woff|woff2|ttf|otf|eot)$/,
        },
        {
          test: /\.(jpe?g|png|gif)$/i,
          type: "asset",
          generator: {
            filename: "images/[name][ext]",
          },
        },
        {
          test: /\.svg$/,
          include: [path.resolve(__dirname, "src")],
          use: [
            {
              loader: "@svgr/webpack",
              options: {
                svgo: false,
              },
            },
            {
              loader: "url-loader",
              options: {
                limit: 8192,
                outputPath: "images",
                publicPath: "images",
                fallback: require.resolve("file-loader"),
              },
            },
          ],
        },
      ],
    },
    plugins: plugins,
    mode: "production",
    externals: {
      debounce: "debounce", // Assuming debounce is a package name to be externalized
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    performance: {
      hints: false,
    },
    optimization: {
      minimize: true,
    },
  };
};
