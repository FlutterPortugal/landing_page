import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Header } from "./header"
import "./reset.css"
import styled from "styled-components"

const OuterLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const InnerLayout = styled.main`
  flex: 1;
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
  display: flex;
  flex-direction: column;
`

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
    <OuterLayout>
      <Header siteTitle={data.site.siteMetadata.title} />
      <InnerLayout>
        {children}
      </InnerLayout>
    </OuterLayout>
  )
}
