import React, { Component } from "react";
import Header from "../header_footer/Header";
import Footer from "../header_footer/Footer";
import ContactFrom from "../contactForm";

class Layout extends Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        {this.props.children}
        <ContactFrom />
        <Footer />
      </>
    );
  }
}

export default Layout;
