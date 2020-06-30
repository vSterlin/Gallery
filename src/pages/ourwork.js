import React, { useState, useEffect } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import {Fire} from "@styled-icons/icomoon";
import {Leaf, Water} from "@styled-icons/entypo";
import {Wind} from "@styled-icons/boxicons-regular";

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
const StyledLink = styled(Link)`
  text-decoration: none;
  /* line-height: 1em; */
  &> * {
    height: 1em;
  }
`;
const OurWork = () => {
  return (
     <Layout color="main">

<StyledLink to="fire">Fire <Fire/></StyledLink>
<StyledLink to="earth">Earth <Leaf /></StyledLink>
<StyledLink to="water">Water <Water /></StyledLink>
<StyledLink to="air">Air <Wind/></StyledLink>

    </Layout>
  );
};

export default OurWork;
