import PropTypes from "prop-types";
import React from "react";
import { ReactComponent as FigmaCursor } from "./figmaCursor.svg";
import Text from "../Text";
import classnames from "classnames";

/* Badge
 *
 * a label with role description
 */
const Badge = ({ part, isHidden }) => {
  const role = part;
  const badgeClass = role === "developer" ? "mr-4" : "mb-4";
  const iconClass = role === "developer" ? "ml-6 mt-4" : "ml-3 transform scale-x-mirror scale-x-2";
  return (
    <div className={classnames(badgeClass, "flex flex-col items-start w-16")}>
      {!isHidden && (
        <>
          <FigmaCursor className={iconClass} />
          <Text as="span" variant="xs" className="p-1 capitalize text-light-on-background-900">
            {role}
          </Text>
        </>
      )}
    </div>
  );
};

Badge.propTypes = {
  isHidden: PropTypes.bool,
  part: PropTypes.string,
};

export default Badge;
