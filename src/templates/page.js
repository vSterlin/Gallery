import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import PageSlider from "../components/PageSlider";

// import { colorObject } from "../colors/colors";

// const Main = styled.div`
//   background-color: ${({ color }) => colorObject[color].backgroundColor};
//   color: ${({ color }) => colorObject[color].secondaryColor};

//   /* height: 100vh; */
// `;

export const data = graphql`
  query($name: String) {
    contentfulImageType(name: { eq: $name }) {
      name
      images {
        fluid(quality: 50) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`;
const TemplatePage = ({ pageContext, data }) => {
  const { element } = pageContext;
  return (
    <Layout color={element}>
      {/* <Main color={element}> */}
        <PageSlider color={element} slides={1} imageArray={data.contentfulImageType.images} page/>
      {/* </Main> */}
    </Layout>
  );
};

export default TemplatePage;
