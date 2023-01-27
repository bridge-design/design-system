import React from "react";
import PropTypes from "prop-types";
import Text from "../Text";
import { LogoTwitter, LogoLinkedin, LogoGithub } from "@carbon/icons-react";

const ProfileCard = ({ photoUrl, name, role, description, twitter, linkedin, github, reverse }) => {
  return (
    <div
      className={`flex items-start flex-col rounded-[4px] bg-light-on-background-200 lg:max-h-[342px] max-w-min lg:max-w-full overflow-hidden justify-between ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <img src={photoUrl} alt={name} className="rounded-l-[4px] max-w-[306px] object-contain" />
      <div
        className={
          "lg:min-h-[342px] flex flex-col justify-between w-full px-4 py-4 lg:px-10 lg:py-14"
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
          <Text variant="base" className="flex-1">
            {description}
          </Text>
          <div className="flex justify-center gap-[10%] justify-self-end lg:justify-start">
            <a href={twitter}>
              <LogoTwitter size={32} />
            </a>
            <a href={linkedin}>
              <LogoLinkedin size={32} />
            </a>
            <a href={github}>
              <LogoGithub size={32} />
            </a>
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
