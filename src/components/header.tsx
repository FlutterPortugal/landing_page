import * as React from "react"
import styled from "styled-components"
import logo from "../images/logo.jpg"

const HeaderWrapper = styled.header`
  background: #fff;
  padding: 0.5em 0.5em;
  & * {
    cursor: default;
  }
  @media (max-width: 750px) {
      display: none;
    }
`

const HeaderInner = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0 auto;
  max-width: 960px;
`

const Logo = styled.a`
  display: block;
  height: 50px;
  
`

interface Props {
  siteTitle: string
}

export const Header: React.FC<Props> = ({ siteTitle = "" }) => (
  <HeaderWrapper>
    <HeaderInner>
    <Logo title={siteTitle} href="/">
      <img src={logo} alt={siteTitle} />
    </Logo>
    </HeaderInner>
  </HeaderWrapper>
)
