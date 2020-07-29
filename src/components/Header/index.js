import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

export const Header = (props) => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <FontAwesomeIcon icon={faLaptopCode} />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Evgeniy Mokeev</h1>
        <p>Frontside Varial Kickflip Developer</p>
      </div>
    </div>
    <nav className="use-middle">
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about');
            }}
          >
            About
          </button>
        </li>
        <li className="is-middle">
          <button
            onClick={() => {
              props.onOpenArticle('contact');
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
};
