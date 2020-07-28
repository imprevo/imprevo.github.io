import PropTypes from 'prop-types';
import React from 'react';
import photo from '../images/photo.jpg';

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle();
        }}
      />
    );

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={photo} alt="photo" />
          </span>
          <p>Hello, world! I'm a Frontend developer from Siberia.</p>
          <p>
            Most of the time i build SPA: fast, secure, responsive and
            multilingual. I care about quality, productivity and ease of
            support. I am trying to automate routine tasks using various tools.
          </p>
          <p>
            Besides programming i have favorite hobby: video games,
            snowboarding, comics. And of course i love making things!
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <ul className="icons">
            <li>
              <a href="https://vk.com/imprevo" className="icon fa-vk">
                <span className="label">Vkontakte</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/_imprevo"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/imprevo" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://career.habr.com/imprevo"
                className="icon fa-briefcase"
              >
                <span className="label">Habr Career</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    );
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
};

export default Main;
