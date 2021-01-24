import React from 'react'
import { StaticQuery, graphql } from "gatsby"


const HeaderStatic = () => {
    return (
        <StaticQuery
        query={graphql`
          {
            site {
              info: siteMetadata {
                author
                data
                description
                person {
                  age
                  name
                }
                title
              }
            }
          }
        `}
        render={data => data.site.info.description}
      ></StaticQuery>
    )
}

export default HeaderStatic
