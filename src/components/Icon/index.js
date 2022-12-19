import PropTypes from "prop-types";
import React from "react";
import * as CarbonIcons from "@carbon/icons-react";
import classNames from "classnames";

/* Icon
 *
 * Styled container around Carbon Design icon
 */

const Icon = ({ name, className, size = 16 }) => {
  const conditional = className ? className : "bg-primary-50 text-primary-500";

  const Icon = CarbonIcons[name];

  if (!Icon) {
    return null;
  }

  return (
    <span className={classNames("inline-flex p-4 rounded-[4px] max-w-min", conditional)}>
      <Icon className={className} size={size} />
    </span>
  );
};

Icon.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.number,
};

export default Icon;
