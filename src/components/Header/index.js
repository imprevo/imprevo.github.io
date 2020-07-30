import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

export const Header = ({ onOpenArticle, timeout }) => (
  <header className={cn('header', { timeout })}>
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
          <button onClick={() => onOpenArticle('about')}>About</button>
        </li>
        <li className="is-middle">
          <button onClick={() => onOpenArticle('contact')}>Contact</button>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
};
