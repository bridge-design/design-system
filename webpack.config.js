"use strict";
/*
 * This webpack config is used for production build of components library
 */
const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const paths = {
  libSrc: path.resolve(__dirname, "src"),
  libIndex: [path.resolve(__dirname, "src/index.js")],
  libOutputDir: path.resolve(__dirname, "dist"),
};

module.exports = (_, argv) => {
  const env = argv.mode;
  process.env.BABEL_ENV = env;

  let libraryName = "test-design-system";
  let plugins = [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(env),
    }),
  ];

  if (env === "production") {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: "styles.css",
        chunkFilename: "styles.css",
      })
    );
  }

  return {
    entry: paths.libIndex,
    devtool: "source-map",
    output: {
      path: paths.libOutputDir,
      library: {
        type: "commonjs2",
      },
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            env === "production"
              ? MiniCssExtractPlugin.loader
              : "style-loader", // Use style-loader in development for hot-reloading
            "css-loader",
          ],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.(jpe?g|png|gif)$/i,
          type: "asset",
          generator: {
            filename: "images/[name][ext]",
          },
        },
        {
          // Apply rule for fonts files
          test: /\.(woff|woff2|ttf|otf|eot)$/,
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
