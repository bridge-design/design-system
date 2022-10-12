import PropTypes from "prop-types";
import React from "react";
import { ReactComponent as BridgeLogo } from "./bridge_tmp_logo.svg";
import classnames from "classnames";

/* Logo
 *
 */
const Logo = ({ className }) => {
  return (
    <div className={classnames("flex", className)}>
      <BridgeLogo />
    </div>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
