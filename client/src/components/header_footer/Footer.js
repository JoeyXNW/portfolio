import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer_icon">
        <a
          href="https://github.com/xwang985"
          target="_blank "
          rel="noopener noreferrer"
        >
          <i className="fab fa-github icon"></i>
        </a>

        <a
          href="mailto:xwang985@gmail.com"
          target="_blank "
          rel="noopener noreferrer"
        >
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
