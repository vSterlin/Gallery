import React, { useState, useEffect } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import SlickSlider from "react-slick";
import styled from "styled-components";
import Img from "gatsby-image";
import {LeftArrowAlt, RightArrowAlt} from "@styled-icons/boxicons-solid/"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { colorObject } from "../colors/colors";

const sliderSize = {
  desktop: {
    small: {
      height: "15vh",
      width: "50vw",
    },
    big: {
      height: "50vh",
      width: "50vw",
    },
  },
  mobile: {
    small: {
      height: "10vh",
      width: "80vw",
    },
    big: {
      height: "30vh",
      width: "80vw",
    },
  },
};

const BigStyledSlider = styled(SlickSlider)`
  /* width: 50vw; */
  margin: 0 auto;
  position: relative;
  /* height: 50vh; */
  /* box-shadow: 0 0 100px rgb(0,0,0); */
  z-index: 2;

  height: ${sliderSize.desktop.big.height};
  width: ${sliderSize.desktop.big.width};
  margin-top: 30px;

  @media only screen and (max-width: 768px) {
    height: ${sliderSize.mobile.big.height};
    width: ${sliderSize.mobile.big.width};
  }
`;

const SmallStyledSlider = styled(SlickSlider)`
  /* width: 50vw; */
  margin: 30px auto;
  position: relative;
  /* height: 50vh; */
  /* box-shadow: 0 0 100px rgb(0,0,0); */
  z-index: 2;
  height: ${sliderSize.desktop.small.height};
  width: ${sliderSize.desktop.small.width};

  @media only screen and (max-width: 768px) {
    height: ${sliderSize.mobile.small.height};
    width: ${sliderSize.mobile.small.width};
  }
`;

const Image = styled(Img)`
  /* height: 60vh; */
  height: ${sliderSize.desktop.big.height};

  @media only screen and (max-width: 768px) {
    height: ${sliderSize.mobile.big.height};
    /* width: ${sliderSize.mobile.big.width}; */
  }
`;

const SmallImage = styled(Img)`
  /* height: 60vh; */
  height: ${sliderSize.desktop.small.height};

  @media only screen and (max-width: 768px) {
    height: ${sliderSize.mobile.small.height};
    /* width: ${sliderSize.mobile.small.imageWidth}; */
  }
`;

const ImageWrapper = styled.div``;

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${({ color }) => colorObject[color].backgroundColor};
  /* color: ${({ color }) => colorObject[color].secondaryColor}; */
  height: calc(100vh - 200px);
  justify-content: center;
`;

const iconResize = (icon, color) => {
  return (styled(icon)`
    color: ${colorObject[color].headerTextColor};
    height: 50px;
    &:hover {
      color: ${colorObject[color].headerColor}
    }
  `);
}


const SliderList = (props) => {
const { slides, imageArray, page } = props;
const [color, setColor] = useState(props.color);
  useEffect(() => {
    console.log(color)

  }, [color])
const LeftArrow = iconResize(LeftArrowAlt, color);
const RightArrow = iconResize(RightArrowAlt, color);
  const settingsBig = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
  };

  const settingsSmall = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  const [smallNav, setSmallNav] = useState(null);
  const [bigNav, setBigNav] = useState(null);

  return (
    <FlexBox color={color}>
      <BigStyledSlider
        {...settingsBig}
        ref={(big) => setBigNav(big)}
        asNavFor={smallNav}
      >
        {imageArray.map((image, i) => {
          const img = image.fluid;

          return (
            <ImageWrapper>
              <Image fluid={img} page={page} />{" "}
            </ImageWrapper>
          );
        })}
      </BigStyledSlider>
      <SmallStyledSlider
        {...settingsSmall}
        ref={(small) => setSmallNav(small)}
        asNavFor={bigNav}
      >
        {imageArray.map((image, i) => {
          const img = image.fluid;

          return (
            <ImageWrapper>
              <SmallImage fluid={img} page={page} />{" "}
            </ImageWrapper>
          );
        })}
      </SmallStyledSlider>
    </FlexBox>
  );
};

export default SliderList;
