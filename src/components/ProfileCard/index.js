import React from "react";
import PropTypes from "prop-types";
import Text from "../Text";
import { LogoTwitter, LogoLinkedin, LogoGithub } from "@carbon/icons-react";

const ProfileCard = ({ photoUrl, name, role, description, twitter, linkedin, github, reverse }) => {
  const isDescription = description !== undefined;
  return (
    <div
      className={`flex items-start flex-col gap-4 rounded-[4px] bg-light-on-background-200 lg:max-h-min min-w-min lg:max-w-full overflow-hidden justify-between px-4 py-4 ${
        reverse ? "sm:flex-row-reverse" : "sm:flex-row"
      }`}
    >
      <img src={photoUrl} alt={name} className="rounded-l-[4px] max-w-[306px] object-contain" />
      <div
        className={
          "lg:min-h-[342px] flex flex-col justify-between w-full lg:pl-6 xl:py-10 lg:pr-10"
        }
      >
        <Text
          variant="2XlMedium"
          className="mb-2 text-2XlMedium font-2XlMedium tracking-2XlMedium leading-2XlMedium"
        >
          {name}
        </Text>
        <Text variant="base" className="mb-6">
          {role}
        </Text>
        <div className="flex flex-col justify-between flex-1">
          {isDescription && (
            <Text variant="base" className="flex-1 mb-2">
              {description}
            </Text>
          )}
          <div
            className={`flex ${
              !isDescription ? "justify-start lg:gap-[5%] " : "justify-center"
            } gap-[10%] justify-self-end lg:justify-start`}
          >
            {twitter && (
              <a href={twitter} className="hover:color-light-on-background-800">
                <LogoTwitter size={32} />
              </a>
            )}
            {linkedin && (
              <a href={linkedin} className="hover:color-light-on-background-800">
                <LogoLinkedin size={32} />
              </a>
            )}
            {github && (
              <a href={github} className="hover:color-light-on-background-800">
                <LogoGithub size={32} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  photoUrl: PropTypes.string,
  name: PropTypes.string,
  role: PropTypes.string,
  description: PropTypes.string,
  twitter: PropTypes.string,
  linkedin: PropTypes.string,
  github: PropTypes.string,
  reverse: PropTypes.bool,
};

export default ProfileCard;
