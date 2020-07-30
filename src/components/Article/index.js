import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';
import './styles.scss';

export const Article = ({
  children,
  onCloseArticle,
  id,
  timeout,
  active,
  title,
}) => (
  <article id={id} className={cn('article', { active, timeout })}>
    <h2 className="major">{title}</h2>
    {children}
    <button className="article-close" onClick={onCloseArticle} />
  </article>
);

Article.propTypes = {
  children: PropTypes.node,
  onCloseArticle: PropTypes.func,
  id: PropTypes.string,
  timeout: PropTypes.bool,
  active: PropTypes.bool,
  title: PropTypes.node,
};
