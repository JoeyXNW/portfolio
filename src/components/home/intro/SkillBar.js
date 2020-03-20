import React, { Component } from "react";
import { Slide } from "react-reveal";

class SkillBar extends Component {
  state = {
    start: 0,
    end: 100
  };

  width = () => {
    const { start, end } = this.state;
    if (start < end) {
      this.setState({ start: start + 1 });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.width();
    }, 30);
  }

  render() {
    return (
      <Slide right onReveal={this.width}>
        <div className="skillContainer">
          <div className="name">{this.props.name}</div>
          <div
            className="skill"
            style={{ width: `${this.state.start}%` }}
          ></div>
          {/* <div className="percent">{width}%</div> */}
        </div>
      </Slide>
    );
  }
}

export default SkillBar;
