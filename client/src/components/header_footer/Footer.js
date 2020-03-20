import React from "react";
import "./header_footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer_icon">
        <a href="https://github.com/xwang985" target="_blank">
          <i className="fab fa-github icon"></i>
        </a>

        <a href="mailto:xwang985@gmail.com">
          <i className="fas fa-envelope icon"></i>
        </a>
      </div>
      <div className="footer_discl">
        ©Xining (Joey) Wang 2020. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
