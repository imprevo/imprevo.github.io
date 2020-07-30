import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './styles.scss';

export const Footer = ({ timeout }) => (
  <footer className={cn('footer', { timeout })}>
    <p className="copyright">
      &copy; imprevo. Design: <a href="https://html5up.net">HTML5 UP</a>. Built
      with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a>
    </p>
  </footer>
);

Footer.propTypes = {
  timeout: PropTypes.bool,
};
