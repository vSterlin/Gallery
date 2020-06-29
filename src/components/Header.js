import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import {Gallery} from "@styled-icons/remix-fill";
const Head = styled.header`
  height: 200px;
  background-color: #e2f3f5;
  color: #0e153a;
  text-align: center;
  padding: 20px 30px;
  box-sizing: border-box;
  box-shadow: 0 0 100px rgb(0,0,0);
  z-index: 3;
  position: relative;


`;
const Title = styled.h1`

`;

const Nav = styled.nav`
margin-top: 30px;
  &> * {
    margin: 0 10px;
  }
`;

const StyledLink = styled(Link)`
  &.active {
    border: 1px red solid;
  }
`;

const StyledIcon = styled(Gallery)`
  height: 2em;
`;

const Header = () => (
  <Head>
    <Title>
      VS <br />
      Gallery
    </Title>
    <StyledIcon />
    <Nav>
      <Link activeClassName="active">Home</Link>
      <Link activeClassName="active">Our Work</Link>
      <Link activeClassName="active">Blog</Link>
      <Link activeClassName="active">Contact</Link>
    </Nav>
  </Head>
);

export default Header;