import React from "react";
import { createGlobalStyle } from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
}
`;

const Layout = ({ children }) => {

  return (
    <div>
      <Global />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
