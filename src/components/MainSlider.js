import React, { useState, useEffect } from "react";
import {useStaticQuery, graphql} from "gatsby";
import SliderList from "./SliderList";

const Slider = () => {


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

  const [width, setWidth] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  useEffect(() => {
    console.log(width);

  }, [width])
  return (
    <>
      {typeof window !== `undefined` && width <= 768 ? (
        <SliderList slides={1} imageArray={data.images.edges}/>
      ) : (
        <SliderList slides={3} imageArray={data.images.edges}/>
      )}
    </>
  );
};

export default Slider;
