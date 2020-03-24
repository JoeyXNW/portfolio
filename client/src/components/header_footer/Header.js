import React, { Component } from "react";
import { Link } from "react-router-dom";
import LetterJ from "../../resources/pic/letterJ.png";
import { withRouter } from "react-router-dom";

class Header extends Component {
  state = {
    cursorPosition: 0,
    headerShow: false,
    activeItem: "",
    items: [
      { to: "/", name: "home" },
      { to: "/portfolio", name: "portfolio" }
    ]
  };

  componentDidMount() {
    const currentPath = this.props.location.pathname;
    const currentItem = this.state.items.find(item => item.to === currentPath);

    //check currentItem exists or not due to the potential existance of not found page
    this.setState({ activeItem: currentItem ? currentItem.name : "home" });

    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  //  scroll to the top when navigating to a new page
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  handleMouseEnter = () => {
    const { isScrollingDown } = this.state;
    if (isScrollingDown) {
      this.setState({ isScrollingDown: false });
    }
  };

  handleMouseLeave = () => {
    const { isScrollingDown, headerShow } = this.state;
    if (!isScrollingDown && headerShow) {
      this.setState({ isScrollingDown: true });
    }
  };

  handleScroll = () => {
    const { cursorPosition } = this.state;
    const position = window.scrollY;
    position > cursorPosition
      ? this.setState({ isScrollingDown: true })
      : this.setState({ isScrollingDown: false });

    this.setState({ cursorPosition: position });

    position > 0
      ? this.setState({ headerShow: true })
      : this.setState({ headerShow: false });
  };

  // highlight the current page title
  handleClick = name => {
    this.setState({ activeItem: name });
  };

  showHeaderItem = () =>
    this.state.items.map(item => (
      <Link key={item.name} to={item.to}>
        <div
          className={`header_button ${
            this.state.activeItem === item.name ? "active" : ""
          }`}
          onClick={() => {
            this.handleClick(item.name);
          }}
        >
          {item.name}
        </div>
      </Link>
    ));

  render() {
    const { isScrollingDown, headerShow } = this.state;
    return (
      <header
        className={`${isScrollingDown ? "scrolling_down" : ""} ${
          !headerShow ? "header_hidden" : ""
        }`}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className="header_container">
          <div className="header_logo">
            <Link
              to="/"
              onClick={() => {
                this.handleClick("home");
              }}
            >
              <img src={LetterJ} alt="header logo" className="header_letter" />
            </Link>
          </div>
          {this.showHeaderItem()}
          <a href="resume.pdf" target="_blank " rel="noopener noreferrer">
            <div className="header_button">Resume</div>
          </a>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
