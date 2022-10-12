import React from "react";
import "../src/global.css";
import bridgeTheme from "./bridge.theme";

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
  creevey: {
    skip: {
      stories: ["Page"],
    },
  },
};
