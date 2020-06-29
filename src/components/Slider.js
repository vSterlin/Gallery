import React, {useState, useEffect} from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import SlickSlider from "react-slick"
import styled from "styled-components"
import Img from "gatsby-image";

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"



const StyledSlider = styled(SlickSlider)`

/* width: 50vw; */
margin: 0 auto;
height: 60vh;
position: relative;
/* box-shadow: 0 0 100px rgb(0,0,0); */
z-index: 2;
`

const Image = styled(Img)`
height: 60vh;

`;

const Canvas = styled.div`

height: 100%;
width: 100%;

`;


const Slider = () => {

  // const [navBig, setNavBig] = useState();
  // const [navSmall, setNavSmall] = useState();


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000
  }
  


  const data = useStaticQuery(graphql`
    query {
       images: allFile {
        edges {
          node {
            childImageSharp {
          fluid(quality: 80, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
          }
        }
      }
    }
  `)



  const imageArray = data.images.edges;
  return (
    <>
      <StyledSlider {...settings}>
        {imageArray.map(({node}, i) => {
          return (
            <Canvas>
            <Image fluid={node.childImageSharp.fluid} />{" "}
          </Canvas>
          )
        })}
      </StyledSlider>

    </>
  )
}

export default Slider
