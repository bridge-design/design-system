import PropTypes from "prop-types";
import React from "react";
import * as CarbonIcons from "@carbon/icons-react";
import classNames from "classnames";

/* Icon
 *
 * Styled container around Carbon Design icon
 */
const Icon = ({ name, className }) => {
  const conditional = className
    ? className + "inline-flex p-4 rounded-[4px]"
    : "bg-primary-50 text-primary-500 inline-flex p-4 rounded-[4px]";
  const Icon = CarbonIcons[name];
  return (
    Icon && (
      <span className={classNames("inline-flex p-4 rounded-[4px]", conditional)}>
        <Icon className={className} />
      </span>
    )
  );
};

Icon.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
};

export default Icon;
