import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer_icon">
        <a
          href="https://github.com/xwang985"
          target="_blank "
          rel="noopener noreferrer"
          title="Opens-source on Github"
        >
          <i className="fab fa-github icon"></i>
        </a>

        <a
          // href="mailto:xwang985@gmail.com"
          href="/resume.pdf"
          target="_blank "
          rel="noopener noreferrer"
          title="Download resume"
          download
        >
          <i className="fas fa-download"></i>
        </a>
      </div>
      <div className="footer_discl">
        ©Xining (Joey) Wang 2020. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
