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
position: relative;
height: 50vh;
/* box-shadow: 0 0 100px rgb(0,0,0); */
z-index: 2;

@media only screen and (max-width: 768px) {
  height: 40vh;
}
`
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
`

const Image = styled(Img)`
/* height: 60vh; */
height: 50vh;

@media only screen and (max-width: 768px) {
  height: 40vh;
}

`;

const ImageWrapper = styled.div`

`;


const SliderList = ({slides}) => {

  // const [navBig, setNavBig] = useState();
  // const [navSmall, setNavSmall] = useState();


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 3,
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
      {/* {(typeof window !== `undefined`) && width <= 768 ? (
            <StyledSlider {...settings} slidesToShow={1}>

            {imageArray.map(({node}, i) => {
              return (
                <ImageWrapper>
                <Image fluid={node.childImageSharp.fluid} />{" "}
              </ImageWrapper>
              )
            })}
    
    
          </StyledSlider>
      ) : (      <StyledSlider {...settings} slidesToShow={3}>

        {imageArray.map(({node}, i) => {
          return (
            <ImageWrapper>
            <Image fluid={node.childImageSharp.fluid} />{" "}
          </ImageWrapper>
          )
        })}


      </StyledSlider>)} */}
      

<StyledSlider {...settings} slidesToShow={slides}>

        {imageArray.map(({node}, i) => {
          return (
            <ImageWrapper>
            <Image fluid={node.childImageSharp.fluid} />{" "}
          </ImageWrapper>
          )
        })}


      </StyledSlider>

    </>
  )
}

export default SliderList;
