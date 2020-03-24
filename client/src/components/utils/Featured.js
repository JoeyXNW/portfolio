import React, { Component } from "react";

class Featured extends Component {
  state = {};
  render() {
    return (
      <div
        className="featured"
        style={{
          height: `${window.innerHeight}px`
        }}
      >
        <div className="container">{this.props.children}</div>
      </div>
    );
  }
}

export default Featured;

// {...this.props.addStyle}
