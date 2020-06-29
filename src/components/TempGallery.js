import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
const TempGallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulImageType {
        edges {
          node {
            name
            images {
              fluid(quality: 50) {
                ...GatsbyContentfulFluid_withWebp

              }
            }
          }
        }
      }
    }
  `);
  return (<div>x
    {
    data.allContentfulImageType.edges.map(({node}) => {
      return node.images.map(({fluid}) => {
      return (<Img fluid={fluid}></Img>);

      })
    })
  }
  </div>)
};

export default TempGallery;
