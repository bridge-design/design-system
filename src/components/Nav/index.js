import PropTypes from "prop-types";
import React, { useState } from "react";
import Text from "../Text";
import { Menu24 } from "@carbon/icons-react";
import { Close24 } from "@carbon/icons-react";
import classnames from "classnames";

/* Nav
 *
 * horizontal menu with links
 */
const Nav = ({ items, linkComponent, className, currentPath, children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={className}>
      <button
        className="block ml-auto md:hidden"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
      >
        {isMenuOpen ? (
          <Close24 className="m-6 text-light-on-background-900" />
        ) : (
          <Menu24 className="m-6 text-light-on-background-900" />
        )}
      </button>
      <div
        className={
          isMenuOpen
            ? "flex flex-col absolute top-full w-full bg-white left-0 right-0 p-20"
            : "hidden md:flex relative"
        }
      >
        <ul className="flex flex-col justify-between w-full text-center list-none bg-light-background-900 md:inline-flex md:flex-row text-light-on-background-900 dark:text-dark-on-background-900">
          {items &&
            items.map((item) => (
              <li key={item.href} className="px-2 py-6 md:py-0">
                <Text
                  variant="2Xl"
                  as={linkComponent || "a"}
                  href={item.href}
                  highlight={
                    currentPath == item.href ? "yellow-100" : undefined
                  }
                  className="hover:bg-highlight-yellow-100"
                >
                  {item.name}
                </Text>
              </li>
            ))}
        </ul>
        {children}
      </div>
    </nav>
  );
};

Nav.propTypes = {
  linkComponent: PropTypes.any,
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      href: PropTypes.string,
    })
  ),
  currentPath: PropTypes.string,
  children: PropTypes.node,
};

export default Nav;
