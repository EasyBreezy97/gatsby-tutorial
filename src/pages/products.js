import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "../components/products.module.css"
import Image from "gatsby-image"
import { Link } from "gatsby"
import Images from "../examples/Images"

const ComponentName = ({ data }) => {
  console.log(data)
  const {
    allContentfulProduct: { nodes: products },
  } = data
  console.log(products)
  return (
    <Layout>
      <section className={styles.page}>
        {products.map(product => (
          <article key={product.id}>
            <Image fluid={product.image.fluid} alt={product.title}/>
            <h3>{product.title} <span>${product.price}</span></h3>
            <Link to={`/products/${product.slug}`}>More details</Link>
          </article>
        ))}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        price
        title
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default ComponentName