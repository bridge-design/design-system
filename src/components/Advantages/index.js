import React from "react";
import PropTypes from "prop-types";
import Text from "../Text";
import Icon from "../Icon";
import classnames from "classnames";
import classNames from "classnames";

const Advantages = ({ colorSchema, content }) => {
  const colorTextClass =
    colorSchema === "dark"
      ? "py-11 px-10 gap-20 bg-light-on-background-900 text-light-on-background-50"
      : "text-gray-900 gap-10";

  const colorIconsClass =
    colorSchema === "dark" ? "bg-light-on-background-800" : "bg-light-on-background-900";

  return (
    <div className={classnames("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ", colorTextClass)}>
      {content.map((it) => {
        return (
          <div key={it.title} className="flex flex-col">
            <Icon
              name={it.icon}
              className={classNames(" text-light-on-background-50", colorIconsClass)}
              size={32}
            />
            <Text as="span" variant="2xl" className="p-1 mt-8 mb-4 ">
              {it.title}
            </Text>
            <Text as="span" variant="lg" className="p-1 ">
              {it.description}
            </Text>
          </div>
        );
      })}
    </div>
  );
};

Advantages.propTypes = {
  colorSchema: PropTypes.string.isRequired, // Change PropTypes.func to PropTypes.string
  content: PropTypes.array.isRequired, 
  
};

export default Advantages;
