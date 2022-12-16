import React from "react";
import PropTypes from "prop-types";
import Text from "../Text";
import { LogoTwitter, LogoLinkedin, LogoGithub } from "@carbon/icons-react";

const ProfileCard = ({ photoUrl, name, role, twitter, linkedin, github }) => {
  return (
    <div className="flex justify-between rounded-[4px] bg-light-on-background-200">
      <img src={photoUrl} alt={name} />
      <div>
        <Text variant="2xl">{name}</Text>
        <Text variant="base">{role}</Text>
        <div className="flex gap-6">
          <a href={twitter}>
            <LogoTwitter />
          </a>
          <a href={linkedin}>
            <LogoLinkedin />
          </a>
          <a href={github}>
            <LogoGithub />
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
