import React from "react";
import PropTypes from "prop-types";
import Text from "../Text";
import Icon from "../Icon";
import classnames from "classnames";
//import { UserIdentification } from "@carbon/icons-react/";

const Advantages = ({ colorSchema }) => {
  const CONTENT = [
    {
      icon: "UserIdentification",
      title: "5× Faster",
      description:
        "Reusing the same design and development components and patterns from a design system library. allows all organizational teams to create, test, and launch products more quickly.",
    },
    {
      icon: "Rocket",
      title: "Coherent",
      description:
        "Ensuring that your company's identity and the experience it provides for customers is consistent across the board for all of your digital products.",
    },
    {
      icon: "TreeView",
      title: "Scalability",
      description:
        "Maintain and scale your products more easily. The entire product line will be aligned, so each new release will work seamlessly with all previous versions and updates (and vice versa)",
    },
  ];
  const colorClass =
    colorSchema === "dark"
      ? "bg-light-on-background-900 text-light-on-background-50"
      : "bg-light-on-background-50 text-light-on-background-900";

  return (
    <div className={classnames(colorClass, " py-3.5 px-10 flex justify-between  gap-20")}>
      {CONTENT.map((it) => {
        return (
          <div key={it.title} className="flex flex-col">
            {/* <UserIdentification size="16" /> */}
            <Icon name={it.icon} className={colorClass} />
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
  // role: PropTypes.string,
};

export default Advantages;
