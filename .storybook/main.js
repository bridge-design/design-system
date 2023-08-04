//** @type { import('@storybook/react-webpack5').StorybookConfig } */
import path from "path";

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
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ['./public'],

  webpackFinal: async (config) => {
    // SVGR
    const svgRule = config.module.rules.find((rule) => rule.test && rule.test.test(".svg"));
    svgRule.exclude = path.resolve(__dirname, "../src/components/");
  
    config.module.rules.push({
      test: /\.svg$/,
      include: path.resolve(__dirname, "../src/components/"),
      use: ["@svgr/webpack", "file-loader"],
    });
  
    return config;
  }
}

export default config;