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
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handlePressESC = this.handlePressESC.bind(this);
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: false });
    }, 100);
    document.addEventListener('mousedown', this.handleClickOutside);
    document.addEventListener('keydown', this.handlePressESC);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    document.removeEventListener('mousedown', this.handleClickOutside);
    document.removeEventListener('keydown', this.handlePressESC);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleOpenArticle(article) {
    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article,
    });

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      });
    }, 325);

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout,
      });
    }, 350);
  }

  handleCloseArticle() {
    this.setState({
      articleTimeout: !this.state.articleTimeout,
    });

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      });
    }, 325);

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: '',
      });
    }, 350);
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.isArticleVisible) {
        this.handleCloseArticle();
      }
    }
  }

  handlePressESC(event) {
    if (event.code === 'Escape') {
      if (this.state.isArticleVisible) {
        this.handleCloseArticle();
      }
    }
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
            isArticleVisible={isArticleVisible}
            timeout={timeout}
            articleTimeout={articleTimeout}
            article={article}
            onCloseArticle={this.handleCloseArticle}
            setWrapperRef={this.setWrapperRef}
          />
          <Footer timeout={timeout} />
        </div>
        <Background />
      </div>
    );
  }
}
