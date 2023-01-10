import React from "react";
import PropTypes from "prop-types";
import Text from "../Text";
import { LogoTwitter, LogoLinkedin, LogoGithub } from "@carbon/icons-react";

const ProfileCard = ({ photoUrl, name, role, twitter, linkedin, github }) => {
  return (
    <div className="flex items-start flex-col lg:flex-row rounded-[4px] bg-light-on-background-200 lg:max-w-[657px] lg:max-h-[342px] max-w-[306px]">
      <img src={photoUrl} alt={name} className="rounded-l-[4px] max-w-full h-auto object-contain" />
      <div className="flex flex-col justify-between w-full h-full px-4 py-4 lg:px-10 lg:py-20">
        <Text variant="2xl" className="mb-2">
          {name}
        </Text>
        <Text variant="base" className="flex-1 mb-2">
          {role}
        </Text>
        <div className="flex justify-center gap-6 lg:justify-start">
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
  );
};

ProfileCard.propTypes = {
  photoUrl: PropTypes.string,
  name: PropTypes.string,
  role: PropTypes.string,
  twitter: PropTypes.string,
  linkedin: PropTypes.string,
  github: PropTypes.string,
};

export default ProfileCard;
