import React from "react";
import styled,{ createGlobalStyle } from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
}
body {
  overflow-x: hidden;
}
`;

const MainDiv = styled.div`
  /* min-height: 100vh; */
`;

const Layout = ({ children, color }) => {
  return (
    <MainDiv>
      <Global />
      <Header color={color} />
      {children}
      <Footer color={color}/>
    </MainDiv>
  );
};

export default Layout;
