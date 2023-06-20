import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import Text from "../Text";
import { Menu } from "@carbon/icons-react";
import { Close } from "@carbon/icons-react";

/* Nav
 *
 * horizontal menu with links
 */
const Nav = ({ items, linkComponent, className, children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    //The navigation closing handler by pressing ESC btn
    const handleEscClose = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, []);

  return (
    <nav className={className}>
      <button className="block ml-auto lg:hidden" onClick={() => setMenuOpen((isOpen) => !isOpen)}>
        {isMenuOpen ? (
          <Close size={24} className="m-6 text-light-on-background-900" />
        ) : (
          <Menu size={24} className="m-6 text-light-on-background-900" />
        )}
      </button>
      <div
        className={
          isMenuOpen
            ? "flex flex-col absolute z-50 top-24 bg-white left-0 right-0 p-20 isOpen"
            : "hidden lg:flex relative"
        }
      >
        <ul className="flex flex-col justify-end w-full gap-10 text-center list-none md:inline-flex md:flex-row text-light-on-background-900">
          {items &&
            items.map((item) => (
              <li key={item.href} className="px-2 py-2 md:py-0" onClick={() => setTimeout(() => { setMenuOpen(false) }, 600)}>
                <Text
                  variant="xlMedium"
                  as={linkComponent || "a"}
                  href={item.href}
                  className="border-gray-900 hover:border-b-2 text-xlMedium font-xlMedium tracking-xlMedium leading-xlMedium"
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
