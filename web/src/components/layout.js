import React from "react";
import Header from "./header";

import "../styles/layout.css";

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div>{children}</div>
    <footer>
      <div>
        <div>&#128020;</div>
      </div>
    </footer>
  </>
);

export default Layout;
