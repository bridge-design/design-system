/** @type { import('@storybook/react-webpack5').StorybookConfig } */

const path = require('path');

const config = {
  core: {
    builder: "@storybook/builder-webpack5"
  },
  stories: ["../src/**/*.stories.mdx"],
  addons: [
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
    {
      name: "@storybook/addon-docs",
      options: {
        jsxOptions: {},
        csfPluginOptions: null,
        mdxPluginOptions: {},
        transcludeMarkdown: true,
      },
    },
    'creevey',
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (config) => {
    // use @babel/preset-react for JSX and env (instead of staged presets)
    const babelLoader = config.module.rules.find((rule) =>
      rule.use && rule.use.some((loader) => loader.loader === "babel-loader")
    );
    if (babelLoader) {
      babelLoader.use[0].options.presets.push(require.resolve("@babel/preset-react"));
      babelLoader.use[0].options.presets.push(require.resolve("@babel/preset-env"));
    }

    // SVGR
    const svgRule = config.module.rules.find((rule) => rule.test && rule.test.test(".svg"));
    svgRule.exclude = path.resolve(__dirname, "../src/components/");

    config.module.rules.push({
      test: /\.svg$/,
      include: path.resolve(__dirname, "../src/components/"),
      use: ["@svgr/webpack', 'file-loader"],
    });

    // fonts
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
          },
        },
      ],
      include: path.resolve(__dirname, "./public"),
    });

    // Add plugin which adds design-tokens source file to watch scope
    const { WatchIgnorePlugin } = require("webpack");
    config.plugins.push(
      new WatchIgnorePlugin({
        paths: [path.resolve(__dirname, "../src/tokens/design-tokens.json")],
      })
    );

    // Rebuild tokens when the design-tokens file changes
    const StyleDictionary = require("style-dictionary");
    const tokensConfigPath = path.resolve(__dirname, "../src/tokens/config.js");

    const rebuildTokens = () => {
      StyleDictionary.extend(tokensConfigPath).buildPlatform("js");
    };

    const designTokensPath = path.resolve(__dirname, "../src/tokens/design-tokens.json'");
    config.watchOptions = {
      ignored: [designTokensPath],
    };

    const chokidar = require('chokidar');
    chokidar.watch(designTokensPath).on('change', rebuildTokens);

    rebuildTokens();

    return config;
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ['./public'],
};

export default config;