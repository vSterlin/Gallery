import React, { useState, useEffect } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import MainSlider from "../components/MainSlider";
import ContactForm from "../components/ContactForm";
import TempGallery from "../components/TempGallery";

const H1 = styled.h1`
  text-align: center;
  line-height: calc(100vh - 250px);
  color: black;
  * {
    color: rgba(0, 0, 0, 0.6);
  }
`;

const MessageDiv = styled.div`
height: calc(100vh - 250px);
background-color: #e8ffe8;


`;

const IndexPage = () => {
  return (
    <Layout color="main">
      <MessageDiv>

      
       <H1>Your form has been submitted, thank you! <Link to="/">Go back to home page</Link></H1>
      </MessageDiv>
    </Layout>
  );
};

export default IndexPage;
