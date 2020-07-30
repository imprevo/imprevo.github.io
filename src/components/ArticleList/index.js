import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faInstagram,
  faVk,
} from '@fortawesome/free-brands-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { Article } from '../Article';
import { SocialIcon } from '../SocialIcon';
import photo from '../../images/photo.jpg';
import './styles.scss';

export const ArticleList = ({
  article,
  articleTimeout,
  onCloseArticle,
  setWrapperRef,
  timeout,
}) => (
  <div ref={setWrapperRef} className={cn('article-list', { timeout })}>
    <Article
      id="about"
      active={article === 'about'}
      timeout={articleTimeout}
      onCloseArticle={onCloseArticle}
      title="About"
    >
      <span className="image main">
        <img src={photo} alt="photo" />
      </span>
      <p>Hello, world! I'm a Frontend developer from Siberia.</p>
      <p>
        Most of the time i build SPA: fast, secure, responsive and multilingual.
        I care about quality, productivity and ease of support. I am trying to
        automate routine tasks using various tools.
      </p>
      <p>
        Besides programming i have favorite hobby: video games, snowboarding,
        comics. And of course i love making things!
      </p>
    </Article>

    <Article
      id="contact"
      active={article === 'contact'}
      timeout={articleTimeout}
      onCloseArticle={onCloseArticle}
      title="Contact"
    >
      <ul className="icons">
        <li>
          <SocialIcon
            href="https://vk.com/imprevo"
            icon={<FontAwesomeIcon icon={faVk} />}
          >
            Vkontakte
          </SocialIcon>
        </li>
        <li>
          <SocialIcon
            href="https://www.instagram.com/_imprevo"
            icon={<FontAwesomeIcon icon={faInstagram} />}
          >
            Instagram
          </SocialIcon>
        </li>
        <li>
          <SocialIcon
            href="https://github.com/imprevo"
            icon={<FontAwesomeIcon icon={faGithub} />}
          >
            GitHub
          </SocialIcon>
        </li>
        <li>
          <SocialIcon
            href="https://career.habr.com/imprevo"
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            Habr Career
          </SocialIcon>
        </li>
      </ul>
    </Article>
  </div>
);

ArticleList.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
};
