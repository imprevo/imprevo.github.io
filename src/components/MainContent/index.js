import React from 'react';
import cn from 'classnames';
import { Header } from '../Header';
import { ArticleList } from '../ArticleList';
import { Footer } from '../Footer';
import { Background } from '../Background';
import './styles.scss';

export class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: true,
    };
    this.handleOpenArticle = this.handleOpenArticle.bind(this);
    this.handleCloseArticle = this.handleCloseArticle.bind(this);
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: false });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  handleOpenArticle(article) {
    if (this.state.isArticleVisible) {
      return;
    }

    this.setState({
      isArticleVisible: true,
      article,
    });

    setTimeout(() => {
      this.setState({
        timeout: true,
      });
    }, 325);

    setTimeout(() => {
      this.setState({
        articleTimeout: true,
      });
    }, 350);
  }

  handleCloseArticle() {
    if (!this.state.isArticleVisible) {
      return;
    }

    this.setState({
      articleTimeout: false,
    });

    setTimeout(() => {
      this.setState({
        timeout: false,
      });
    }, 325);

    setTimeout(() => {
      this.setState({
        isArticleVisible: false,
        article: '',
      });
    }, 350);
  }

  render() {
    const {
      timeout,
      loading,
      article,
      isArticleVisible,
      articleTimeout,
    } = this.state;
    return (
      <div
        className={cn('body', {
          'is-loading': loading,
          'is-article-visible': isArticleVisible,
        })}
      >
        <div className="wrapper">
          <Header onOpenArticle={this.handleOpenArticle} timeout={timeout} />
          <ArticleList
            timeout={timeout}
            articleTimeout={articleTimeout}
            article={article}
            onCloseArticle={this.handleCloseArticle}
          />
          <Footer timeout={timeout} />
        </div>
        <Background />
      </div>
    );
  }
}
