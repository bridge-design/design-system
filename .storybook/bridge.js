import { create } from "@storybook/theming/create";
import logoImage from "./public/bridge_tmp_logo.png";

import typography from "../src/tokens/dist/typography.json";
import colors from "../src/tokens/dist/colors.json";

export default create({
  base: "light",

  colorPrimary: colors.primary["700"],
  colorSecondary: colors.primary["400"],

  // UI
  appBg: colors.light["background"]["900"],
  appContentBg: colors.light["background"]["900"],
  appBorderColor: colors.light["background"]["700"],

  // Typography
  fontBase: typography.fontFamily.base,

  // Text colors
  textColor: colors.light["on-background"]["900"],
  textInverseColor: colors.light.background["900"],

  // Toolbar default and active colors
  barTextColor: colors.light["on-background"]["900"],
  barSelectedColor: colors.primary["500"],
  barBg: colors.light["background"]["900"],

  // Form colors
  inputBg: colors.light["background"]["900"],
  inputBorder: colors.gray["200"],
  inputTextColor: colors.light["on-background"]["900"],

  brandTitle: "Bridge-the-Gap Design System",
  brandUrl: "https://bridge-the-gap.dev",
  brandImage: logoImage,
});
