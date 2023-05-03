import PropTypes from "prop-types";
import React from "react";
import Text from "../Text";
import classnames from "classnames";

/* Timetable
 *
 * A table to represent workshop programm in structured way
 */
const Timetable = ({ data, header, className }) => {
  return (
    data && (
      <Text
        as="table"
        variant="xlMedium"
        className={classnames(
          "text-light-on-background-900 table-auto",
          className
        )}
      >
        {header && (
          <Text
            as="caption"
            variant="2Xl"
            responsive={{ sm: "smMedium" }}
            className="mb-2 text-left md:mb-5"
          >
            {header}
          </Text>
        )}
        <tbody>
          {data.map((row, i) => (
            <tr
              key={row.name + i}
              className="flex py-3 border-b md:py-6 border-light-on-background-900"
            >
              <td className="pr-2 text-left sm:pr-4 w-30 sm:w-64 ">
                <Text
                  as="span"
                  variant="xsMedium"
                  responsive={{ sm: "smMedium" }}
                  className={`${row.color} text-light-on-background-50 p-1 sm:whitespace-nowrap`}
                >
                  {row.time}
                </Text>
              </td>
              <td className="w-1/2 px-2 overflow-hidden text-left sm:px-4 overflow-ellipsis">
                <Text
                  as="span"
                  responsive={{ sm: "smMedium" }}
                  variant="baseMedium"
                >
                  {row.name}
                </Text>
              </td>
              <td className="w-1/2 pl-2 overflow-hidden text-left sm:pl-4 overflow-ellipsis">
                <Text
                  as="span"
                  responsive={{ sm: "smMedium" }}
                  variant="baseMedium"
                >
                  {row.description}
                </Text>
              </td>
            </tr>
          ))}
        </tbody>
      </Text>
    )
  );
};

Timetable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      color: PropTypes.string,
    })
  ),
  header: PropTypes.string,
  className: PropTypes.string,
};

export default Timetable;
