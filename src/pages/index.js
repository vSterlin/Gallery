import React, { useState, useEffect } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
// import Layout from "../components/Layout";
import Slider from "../components/Slider";
import ContactForm from "../components/ContactForm";
import TempGallery from "../components/TempGallery";
const Map = styled.iframe`
  width: 100vw;
  border: none;

  height: 100%;
`;

const MapWrapper = styled.div`
  height: 400px;
`;

const IndexPage = () => {
  return (
    // <Layout>
      {/* <TempGallery /> */}
      <Slider />
      <ContactForm />
      <MapWrapper>


      <Map
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2003012.2649133084!2d-47.64262176239926!3d60.64202584817835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4eab93cd099ee567%3A0xf97781a95b2bc13d!2sKujalleq%20Municipality%2C%20Greenland!5e0!3m2!1sen!2sus!4v1593416007260!5m2!1sen!2sus"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></Map>
            </MapWrapper>
    // </Layout>
  );
};

export default IndexPage;
