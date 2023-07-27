import "../src/global.css";
import bridgeTheme from "./bridge";

export const parameters = {
  docs: {
    theme: bridgeTheme,
  },
  options: {
    storySort: {
      order: ["Intro", "Color Palette", "Typography", "Components"],
    },
  },
  actions: { disable: true },
};
