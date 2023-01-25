import PropTypes from "prop-types";
import React from "react";
import classnames from "classnames";
import { getBreakpoints } from "../../utils/getTheme";

/* Text
 *
 * Any text block
 */
const Text = ({
  variant = "base",
  children,
  as: Component = "p",
  className,
  responsive,
  ...props
}) => {
  const variants = {
    "9xl": "text-9Xl font-9Xl tracking-9Xl leading-9Xl",
    "8xl": "text-8Xl font-8Xl tracking-8Xl leading-8Xl",
    "7xl": "text-7Xl font-7Xl tracking-7Xl leading-7Xl",
    "6xl": "text-6Xl font-6Xl tracking-6Xl leading-6Xl",
    "5xl": "text-5Xl font-5Xl tracking-5Xl leading-5Xl",
    "4xl": "text-4Xl font-4Xl tracking-4Xl leading-4Xl",
    "3xl": "text-3Xl font-3Xl tracking-3Xl leading-3Xl",
    "3XlBold": "font-3XlBold",
    "2xl": "text-2Xl font-2Xl tracking-2Xl leading-2Xl",
    "2XlMedium": "text-2XlMedium font-2XlMedium tracking leading",
    xl: "text-xl font-xl tracking-xl leading-xl",
    xlMedium: "text-xlMedium font-xlMedium tracking-xlMedium leading-xlMedium",
    lg: "text-lg font-lg tracking-lg leading-lg",
    lgItalic: "text-lgItalic font-lgItalic tracking-lgItalic leading-lgItalic",
    lgMedium: "text-lgMedium font-lgMedium tracking-lgMedium leading-lgMedium",
    lgMediumItalic:
      "text-lgMediumItalic font-lgMediumItalic tracking-lgMediumItalic leading-lgMediumItalic ",
    base: "text-base font-base tracking-base leading-base",
    baseMedium: "text-baseMedium font-baseMedium tracking-baseMedium leading-baseMedium",
    sm: "text-sm font-sm tracking-sm leading-sm",
    smMedium: "text-smMedium font-smMedium tracking-smMedium leading-smMedium",
    xs: "text-xs font-xs tracking-xs leading-xs",
    xsMedium: "text-xsMedium font-xsMedium tracking-xsMedium leading-xsMedium",
  };

  const responsiveClasses = responsive
    ? Object.entries(responsive)
        .map(
          ([bp, variant]) =>
            variant &&
            variants[variant.toLowerCase()]
              .split(" ")
              .map((v) => bp + ":" + v)
              .join(" ")
        )
        .join(" ")
    : "";

  return (
    <Component
      className={classnames(variants[variant.toLowerCase()], responsiveClasses, className)}
      {...props}
    >
      {children}
    </Component>
  );
};

const breakpoints = getBreakpoints();
const responsivePropShape = Object.keys(breakpoints).reduce(
  (obj, bp) => ({ ...obj, [bp]: PropTypes.string }),
  {}
);
Text.propTypes = {
  as: PropTypes.any,
  children: PropTypes.node,
  variant: PropTypes.string,
  responsive: PropTypes.shape(
    /** Dynamically load all breakpoints from config. Default breakpoints names are: sm, md, lg, xl, 2xl */
    responsivePropShape
  ),
  className: PropTypes.string,
};

Text.defaultProps = {
  as: "p",
};

export default Text;
