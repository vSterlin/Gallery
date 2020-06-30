import React from 'react'
import styled from "styled-components";
import {colorObject} from "../colors/colors";

const Foot = styled.footer`
  background-color: ${({color}) => colorObject[color].headerColor};
  color: ${({color}) => colorObject[color].headerTextColor};
  text-align: center;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Footer = ({color}) => {
  return (
    <Foot color={color}>
      Created by VS {new Date().getFullYear()} &copy;
    </Foot>
  )
}

export default Footer
