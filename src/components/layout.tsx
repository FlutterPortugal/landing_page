import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Header } from "./header"
import "./reset.css"


export const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
      query SiteTitleQuery {
          site {
              siteMetadata {
                  title
              }
          }
      }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
        </footer>
      </div>
    </>
  )
}
