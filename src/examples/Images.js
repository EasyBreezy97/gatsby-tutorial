import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/img-4.jpeg"
import Image from "gatsby-image"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "img-3.jpeg" }) {
      childImageSharp {
        fixed(width: 300, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "img-4.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    example: file(relativePath: {eq: "img-4.jpeg"}) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  console.log(data)
  return (
    <section className="images">
      <article className="single-image">
        <h3>Basic image</h3>
        <img src={img} alt="im-4" width="100%" />
        <h2>Content</h2>
      </article>
      <article className="single-image">
        <h3>fixed image / blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed} />
        <h2>Content</h2>
      </article>
      <article className="single-image">
        <h3>fluid image / svg</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} />
        <div className="small">
          <Image fluid={data.fluid.childImageSharp.fluid} />
          <h2>Content</h2>
        </div>
        <Image fluid={data.example.childImageSharp.fluid}/>
      </article>
    </section>
  )
}

export default Images
