import React from "react";
import PropTypes from "prop-types";
import Text from "../Text";
import { LogoTwitter, LogoLinkedin, LogoGithub } from "@carbon/icons-react";

const ProfileCard = ({ photoUrl, name, role, twitter, linkedin, github }) => {
  return (
    <div className="flex flex-col md:flex-row rounded-[4px] bg-light-on-background-200 max-w-max">
      <img src={photoUrl} alt={name} className="rounded-l-[4px] max-w-max w-full" />
      <div className="p-4 md:p-10 md:py-20">
        <Text variant="2xl" className="mb-1">
          {name}
        </Text>
        <Text variant="base" className="mb-4 md:mb-16">
          {role}
        </Text>
        <div className="flex justify-center gap-6 md:justify-start">
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