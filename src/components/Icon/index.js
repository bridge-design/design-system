import PropTypes from "prop-types";
import React from "react";
import * as CarbonIcons from "@carbon/icons-react";
import classnames from "classnames";

/* Icon
 *
 * Styled container around Carbon Design icon
 */
const Icon = ({ name, className }) => {
  const Icon = CarbonIcons[name];
  return (
    Icon && (
      <span
        className={classnames("inline-flex p-4 bg-primary-50 text-primary-500", className)}
      >
        <Icon />
      </span>
    )
  )
};

Icon.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
};

export default Icon;
