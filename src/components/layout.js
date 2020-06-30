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

const Layout = ({ children, color }) => {
  return (
    <div>
      <Global />
      <Header color={color} />
      {children}
      <Footer color={color}/>
    </div>
  );
};

export default Layout;
