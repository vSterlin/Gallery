import React, { useState, useEffect } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import {Fire} from "@styled-icons/icomoon";
import {Leaf, Water} from "@styled-icons/entypo";
import {Wind} from "@styled-icons/boxicons-regular";
import {colorObject} from "../colors/colors";
import {StyledLink} from "../components/StyledLink";

// import MainSlider from "../components/MainSlider";
// import ContactForm from "../components/ContactForm";
// import TempGallery from "../components/TempGallery";
// const Map = styled.iframe`
//   width: 100vw;
//   border: none;

//   height: 100%;
// `;

// const MapWrapper = styled.div`
//   height: 400px;
// `;

// const FireIcon = styled(Fire)`
//   /* height: 1em; */

// `;
// const StyledLink = styled(Link)`
//   text-decoration: none;
//   /* line-height: 1em; */
//   &> * {
//     height: 1em;
//   }
// `;

const CircleDiv = styled.div`
  border: 1px black solid;
  border-radius: 500px;
  display: grid;
  grid-template-rows:1fr 1fr;
  grid-template-columns:1fr 1fr;

  width: 500px;
  height: 500px;
  overflow: hidden;
  margin: 0 auto;

`;
const CircleSectionDiv = styled.div`
  background-color: ${({element}) => colorObject[element].headerColor};
  color: ${({element}) => colorObject[element].headerTextColor};

    padding: ${({element}) => (element === "fire" || element === "earth") ? "10%" : "0"} ${({element}) => (element === "air" || element === "earth") ? "10%" : "0"} ${({element}) => (element === "air" || element === "water") ? "10%" : "0"} ${({element}) => (element === "fire" || element === "water") ? "10%" : "0"};
    
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    &:hover {
      &> * {
        transform: scale(1.1, 1.1);
        }
        /* animation: backgroundColorChange 1s linear forwards, colorChange 1s linear forwards; */
        background-color: ${({element}) => colorObject[element].headerTextColor};
        color: ${({element}) => colorObject[element].headerColor};
    }
    transition: background-color 0.3s linear, color 0.3s linear;

`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  &> svg {
      height: 100px;
      margin-bottom: 10px;
    }


`;



const Background = styled.div`
  background-color: ${colorObject["fire"].backgroundColor};
  padding: 50px;
`;

const circleArr = [{name: `fire`, component: <Fire />}, {name: `earth`, component: <Leaf />}, {name:`water`, component: <Water />}, {name:`air`, component: <Wind />}];


const OurWork = () => {
  return (
     <Layout color="main">
       <Background>


       <CircleDiv>
    {circleArr.map((element, i) => {
      return <StyledLink to={element.name}><CircleSectionDiv element={element.name}><IconWrapper>{element.component}{element.name.toUpperCase()}</IconWrapper></CircleSectionDiv></StyledLink>
    })}
       </CircleDiv>
       </Background>

    </Layout>
  );
};

export default OurWork;
