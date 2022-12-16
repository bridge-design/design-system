import React from "react";
import PropTypes from "prop-types";
import Text from "../Text";
import classnames from "classnames";
import Icon from "../Icon";

const Advantages = ({ colorSchema, content }) => {
  const colorClass =
    colorSchema === "dark"
      ? "bg-light-on-background-900 text-light-on-background-50"
      : "bg-light-on-background-50 text-light-on-background-900";

  return (
    <div className={classnames(colorClass, " py-3.5 px-10 flex justify-between  gap-20")}>
      {content.map((it) => {
        return (
          <div key={it.title} className="flex flex-col">
            <Icon name={it.icon} />
            <Text as="span" variant="2xl" className="p-1 text-light-on-background-50">
              {it.title}
            </Text>
            <Text as="span" variant="lg" className="p-1 text-light-on-background-50">
              {it.description}
            </Text>
          </div>
        );
      })}
    </div>
  );
};

Advantages.propTypes = {
  colorSchema: PropTypes.string | "dark" | "light",
  content: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

export default Advantages;
