import React, { Component } from "react";
import { Link } from "react-router-dom";
import LetterJ from "../../resources/pic/letterJ.png";
import { withRouter } from "react-router-dom";

class Header extends Component {
  state = {
    isScrollingDown: false,
    cursorPosition: 0,
    headerShow: false,
    activeItem: "",
    items: [
      { to: "/", name: "home" },
      { to: "/portfolio", name: "portfolio" },
      { to: "/resume", name: "resume" }
    ]
  };

  componentDidMount() {
    const currentPath = this.props.location.pathname;
    const currentItem = this.state.items.find(item => item.to === currentPath);
    this.setState({ activeItem: currentItem.name });

    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
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
    const { cursorPosition, isScrollingDown, headerShow } = this.state;
    const position = window.scrollY;
    position > cursorPosition
      ? this.setState({ isScrollingDown: true })
      : this.setState({ isScrollingDown: false });

    this.setState({ cursorPosition: position });

    position > 0
      ? this.setState({ headerShow: true })
      : this.setState({ headerShow: false });
  };

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
    return (
      <header
        className={`${this.state.isScrollingDown ? "scrolling_down" : ""}`}
        style={{
          backgroundColor: this.state.headerShow
            ? "var(--lightGreen)"
            : "transparent"
        }}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className="header_container">
          <div className="header_logo">
            <Link to="/">
              <img src={LetterJ} alt="header logo" className="header_letter" />
            </Link>
          </div>
          {this.showHeaderItem()}
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
