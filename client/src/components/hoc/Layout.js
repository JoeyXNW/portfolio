import React, { Component } from "react";
import Header from "../header_footer/Header";
import Footer from "../header_footer/Footer";
import ContactForm from "../ContactForm";

class Layout extends Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        {this.props.children}
        <ContactForm />
        <Footer />
      </>
    );
  }
}

export default Layout;
