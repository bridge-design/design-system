import PropTypes from "prop-types";
import React from "react";
import Text from "../Text";
import classnames from "classnames";

/* Cta Link
 *
 * A call-to-action link with decorative arrow afterwards
 */
const CtaLink = ({
  to,
  as,
  ref,
  children,
  className,
  borderClassName,
  arrow = "no",
  underline = false,
  ...props
}) => {
  const classes = classnames(
    "cursor-pointer text-primary-500 hover:text-primary-700 inline-flex items-center group bg-no-repeat text-xlMedium font-xlMedium tracking-xlMedium leading-xlMedium",
    className
  );

  return (
    <Text as={as} href={to} variant="xlMedium" className={classes} ref={ref} {...props}>
      {arrow === "start" && (
        <span
          key="start"
          className="no-underline transition duration-200 transform group-hover:-translate-x-1 motion-reduce:transform-none"
        >
          ←{"\u2004"}
        </span>
      )}
      <span
        key="body"
        className={
          underline
            ? `border-b-2 pb-3 border-primary-500 hover:border-primary-700 ${borderClassName}`
            : "no"
        }
      >
        {children}
      </span>
      {arrow === "end" && (
        <span
          key="end"
          className="no-underline transition duration-200 transform group-hover:translate-x-1 motion-reduce:transform-none"
        >
          {"\u2004"}→
        </span>
      )}
    </Text>
  );
};

CtaLink.propTypes = {
  as: PropTypes.any,
  children: PropTypes.node,
  ref: PropTypes.node,
  to: PropTypes.string,
  className: PropTypes.string,
  borderClassName: PropTypes.string,
  arrow: PropTypes.oneOf(["start", "end", "no"]),
  underline: PropTypes.bool,
};

export default CtaLink;
