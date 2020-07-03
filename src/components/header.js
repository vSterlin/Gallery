import React, {useEffect, useState} from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Gallery } from "@styled-icons/remix-fill";
import { Fire } from "@styled-icons/icomoon";
import { Leaf, Water } from "@styled-icons/entypo";
import { Wind } from "@styled-icons/boxicons-regular";

import { colorObject } from "../colors/colors";

const Head = styled.header`
  height: 200px;
  background-color: ${({ color }) => colorObject[color].headerColor};
  color: ${({ color }) => colorObject[color].headerTextColor};
  text-align: center;
  padding: 20px 30px;
  box-sizing: border-box;
  box-shadow: 0 0 100px rgb(0, 0, 0);
  z-index: 3;
  position: relative;
`;
const Title = styled.h1``;

const Nav = styled.nav`
  margin-top: 30px;
  & > * {
    margin: 0 10px;

    color: ${({ color }) => colorObject[color].headerTextColor};
    &.active {
      border-bottom: 1px ${({ color }) => colorObject[color].headerTextColor}
        solid;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledIcon = styled(Gallery)`
  height: 2em;
`;

const LocationHeader = styled.div`
  position: absolute;
  height: 200px;
  width: 100px;
  right: 0;
  top: 0;
  line-height: 200px;
  /* transform: translateY(100%); */
`;

const iconResize = (icon, color) => {
  if(color === "fire" ||
  color === "earth" ||
  color === "water" ||
  color === "air"){
  return styled(icon)`
    position: absolute;
    height: 200px;
    width: 100px;
    right: 50px;
    top: 0;
    line-height: 200px;

  `};
  return null;
};



const Header = (props) => {
const [color, setColor] = useState(props.color);
  // useEffect(() => {
  //   setColor(props.color)

  // }, [])
  const iconObject = {
    fire: (Fire),
    earth: (Leaf),
    water: (Water),
    air: (Wind),
  };
  const IconComponent = iconObject[color];
  return (
    <Head color={color}>
      <Title>
        VS <br />
        Gallery
      </Title>
      <StyledIcon />
      <Nav color={color}>
        <StyledLink activeClassName="active" to="/">
          Home
        </StyledLink>
        <StyledLink partiallyActive activeClassName="active" to="/ourwork">
          Our Work
        </StyledLink>
        <StyledLink activeClassName="active">Blog</StyledLink>
        <StyledLink activeClassName="active">Contact</StyledLink>
        {/* <StyledLink partiallyActive activeClassName="active" to="/ourwork/fire">
          Fire
        </StyledLink>
        <StyledLink
          partiallyActive
          activeClassName="active"
          to="/ourwork/earth"
        >
          Earth
        </StyledLink>
        <StyledLink
          partiallyActive
          activeClassName="active"
          to="/ourwork/water"
        >
          Water
        </StyledLink>
        <StyledLink partiallyActive activeClassName="active" to="/ourwork/air">
          Air
        </StyledLink> */}
          {IconComponent && <IconComponent />}

      </Nav>
    </Head>
  );
};

export default Header;
