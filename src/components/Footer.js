import React from 'react'
import styled from "styled-components";

const Foot = styled.footer`
  background-color: whitesmoke;
  text-align: center;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Footer = () => {
  return (
    <Foot>
      Created by VS
    </Foot>
  )
}

export default Footer
