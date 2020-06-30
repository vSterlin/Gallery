import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import SliderList from "../components/SliderList";

import {colorObject} from "../colors/colors";


const Main = styled.div`
  background-color: ${({color}) => colorObject[color].backgroundColor};
  color: ${({color}) => colorObject[color].secondaryColor};

  height: 100vh;
`;
const TemplatePage = ({ pageContext, data }) => {
const {element} = pageContext;
  return (
    <Layout color={element}>
      <Main color={element}>
        <SliderList />
      </Main>
    </Layout>
  );
};

export default TemplatePage;
