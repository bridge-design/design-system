import React from "react";
import PropTypes from "prop-types";
import Text from "../Text";
import CtaLink from "../CtaLink";
import { CheckmarkFilled } from "@carbon/icons-react";

import classNames from "classnames";

/* Component
 *
 * description of the benefits of working with an additional team
 */

const HelpTeams = ({ className }) => {
  return (
    <div className={classNames("flex justify-between items-center gap-14", className)}>
      <div className="flex flex-col">
        <Text variant="3xl" className="mb-4">
          Help for busy teams
        </Text>
        <Text variant="lg" className="">
          Hiring an agency brings additional expertise and knowledge to your business. To complete
          the tasks outside of your in-house skillset, it may require team training or additional
          recruitment. Both of which can be time-consuming and can be costly in the long term.
        </Text>
        <div className="pt-10 my-10 border-t border-px border-light-on-background-300">
          <div className="flex items-center gap-1 mb-6">
            <CheckmarkFilled />
            <Text variant="lg">Added skillset</Text>
          </div>
          <div className="flex items-center gap-1 mb-6">
            <CheckmarkFilled />
            <Text variant="lg">Additional expertise</Text>
          </div>
          <div className="flex items-center gap-1">
            <CheckmarkFilled />
            <Text variant="lg">Continous integration and deveployment</Text>
          </div>
        </div>
        <CtaLink href="/contact" underline className="text-xl animate-fadeindelay">
          Start a conversation
        </CtaLink>
      </div>
      <img
        src="rectangle_14.png"
        alt="team work"
        className="w-full h-auto max-w-[678px] object-contain"
      />
    </div>
  );
};

HelpTeams.propTypes = {
  className: PropTypes.string,
};

export default React.memo(HelpTeams);
