import React, { useState, useEffect } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import SlickSlider from "react-slick";
import styled from "styled-components";
import Img from "gatsby-image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled(SlickSlider)`
  /* width: 50vw; */
  margin: 0 auto;
  position: relative;
  /* height: 50vh; */
  /* box-shadow: 0 0 100px rgb(0,0,0); */
  z-index: 2;

  height: 50vh;

  @media only screen and (max-width: 768px) {
    height: 40vh;
  }
`;
const PhoneSlider = styled(SlickSlider)`
  /* width: 50vw; */
  margin: 0 auto;
  position: relative;
  height: 20vh;
  /* box-shadow: 0 0 100px rgb(0,0,0); */
  z-index: 2;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const Image = styled(Img)`
  /* height: 60vh; */
 height: 50vh;
  

  @media only screen and (max-width: 768px) {
    height: 40vh;
  }
`;

const ImageWrapper = styled.div``;

const SliderList = ({ slides, imageArray, page }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
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
  return (
    <>
      <StyledSlider {...settings} slidesToShow={slides}>
        {imageArray.map((image, i) => {
          let img;

          //for sourcing from filesystem
          if (image.node) {
            img = image.node.childImageSharp.fluid;
          }
          //for sourcing from contentful
          else {
            img = image.fluid;
          }
          return (
            <ImageWrapper>
              <Image fluid={img} page={page}/>{" "}
            </ImageWrapper>
          );
        })}
      </StyledSlider>
    </>
  );
};

export default SliderList;
