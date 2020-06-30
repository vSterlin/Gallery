import React, { useState, useEffect } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import SlickSlider from "react-slick";
import styled from "styled-components";
import Img from "gatsby-image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { colorObject } from "../colors/colors";



const BigStyledSlider = styled(SlickSlider)`
  /* width: 50vw; */
  margin: 0 auto;
  position: relative;
  /* height: 50vh; */
  /* box-shadow: 0 0 100px rgb(0,0,0); */
  z-index: 2;

  height: 70vh;
  width: 60vw;
  margin-top: 30px;

  @media only screen and (max-width: 768px) {
    height: 40vh;
  }
`;

const SmallStyledSlider = styled(SlickSlider)`
  /* width: 50vw; */
  margin: 30px auto;
  position: relative;
  /* height: 50vh; */
  /* box-shadow: 0 0 100px rgb(0,0,0); */
  z-index: 2;
  height: 20vh;
  width: 60vw;
 
  @media only screen and (max-width: 768px) {
    height: 10vh;
  }
`;

const Image = styled(Img)`
  /* height: 60vh; */
  height: 70vh;
  

  @media only screen and (max-width: 768px) {
    height: 40vh;
  }
`;

const SmallImage = styled(Img)`
  /* height: 60vh; */
  height: 20vh;
  

  @media only screen and (max-width: 768px) {
    height: 10vh;
  }
`;

const ImageWrapper = styled.div``;

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;


  background-color: ${({ color }) => colorObject[color].backgroundColor};
  color: ${({ color }) => colorObject[color].secondaryColor};
  min-height: 90vh;
  justify-content: center;

`;

const SliderList = ({ slides, imageArray, page, color }) => {
  const settingsBig = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

  };

  const settingsSmall = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false


  };

  // const data = useStaticQuery(graphql`
  //   query {
  //      images: allFile {
  //       edges {
  //         node {
  //           childImageSharp {
  //         fluid(quality: 80, maxWidth: 1920) {
  //           ...GatsbyImageSharpFluid_withWebp
  //         }
  //       }
  //         }
  //       }
  //     }
  //   }
  // `)

  // const [width, setWidth] = useState(null);

  // useEffect(() => {
  //   setWidth(window.innerWidth);
  //   window.addEventListener("resize", () => {
  //     setWidth(window.innerWidth);
  //   });
  //   return () => {
  //     window.removeEventListener("resize", () => {});
  //   };
  // }, []);
  // useEffect(() => {
  //   window.addEventListener("load", () => {
  //     setWidth(window.innerWidth);
  //     console.log('hi')
  //   });
  //   return () => {
  //     window.removeEventListener("load", () => {});
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log(width);

  // }, [width])

  // const imageArray = data.images.edges;
  // console.log(imageArray);

  const [smallNav, setSmallNav] = useState(null);
  const [bigNav, setBigNav] = useState(null);

  return (
    <FlexBox color={color}>
      <BigStyledSlider {...settingsBig} ref={big => setBigNav(big)} asNavFor={smallNav}>
        {console.log(bigNav)}
        {imageArray.map((image, i) => {

            const img = image.fluid;
          
          return (
            <ImageWrapper>
              <Image fluid={img} page={page}/>{" "}
            </ImageWrapper>
          );
        })}
      </BigStyledSlider>
      <SmallStyledSlider {...settingsSmall} ref={small => setSmallNav(small)} asNavFor={bigNav}>
        {imageArray.map((image, i) => {

            const img = image.fluid;
          
          return (
            <ImageWrapper>
              <SmallImage fluid={img} page={page}/>{" "}
            </ImageWrapper>
          );
        })}
      </SmallStyledSlider>

    </FlexBox>
  );
};

export default SliderList;
