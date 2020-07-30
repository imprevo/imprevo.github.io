import PropTypes from 'prop-types';
import React from 'react';

export const SocialIcon = ({ children, icon, href }) => (
  <a href={href} className="icon">
    {icon}
    <span className="label">{children}</span>
  </a>
);

SocialIcon.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
  href: PropTypes.string,
};
