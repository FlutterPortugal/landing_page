import * as React from "react"
import styled from "styled-components"
import galo from "../images/very-big-galo.jpg"

const GaloImg = styled.img`
  height: 90vh;
  position: fixed;
  right: 0;
  bottom: 0;
  transform: translate(50%);
  margin: 0;
  z-index: -1;
  pointer-events: none;
  @media (max-aspect-ratio: 1/1) {
    position: relative;
    height: 10em;
    transform: none;
    margin-bottom: 2em;
  }
`

export const BigGalo: React.FC = () => {
  return <GaloImg src={galo} />
}
