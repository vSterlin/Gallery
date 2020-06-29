import React from "react";
// import { useStaticQuery, graphql } from "gatsby"
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
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

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
