import * as React from "react"
import styled from "styled-components"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { BigGalo } from "../components/big-galo"

const BigLogo: React.FC = () => {
  const Wrapper = styled.div`
    padding: 2em 0;
    display: flex;
    flex: 1;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    @media (max-width: 750px) {
      font-size: 0.6em;
    }
  `
  const Title = styled.h1`
    font-size: 5em;
    color: #9f9f9f;
    font-weight: 300;
    line-height: 1;
    margin-bottom: 0;
  `

  const SubTitle = styled.h2`
    font-size: 3em;
    color: #29b6f6;
    font-weight: 400;
    margin-bottom: 0;
  `

  return (
    <Wrapper>
      <BigGalo />
      <Title>Flutter</Title>
      <SubTitle>Portugal</SubTitle>
    </Wrapper>
  )
}

const Separator = styled.hr`
  background: hsla(0, 0%, 89%, 0.49);
  width: 80%;
  margin: 0 auto 2em;
`

const SocialLink: React.FC<{
  title: string
  description: string
  buttonLabel: string
  buttonRef: string
}> = ({ title, description, buttonLabel, buttonRef }) => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2rem;
    border-right: solid 1px #e1e1e1;
    flex: 1;
    &:last-child {
      border-right-color: transparent;
    }
    @media (max-width: 750px) {
      font-size: 0.8em;
      border-right-width: 0;
      border-bottom: solid 1px #e1e1e1;
      padding: 2rem;
      &:last-child {
        border-bottom-color: transparent;
      }
    }
  `

  const Title = styled.h3`
    color: #054d9c;
    font-size: 1.8em;
    font-weight: 700;
    margin-bottom: 0.5rem;
    @media (max-width: 750px) {
      font-size: 1.5em;
    }
  `

  const Description = styled.p`
    color: #333;
    font-size: 0.8em;
    font-weight: 400;
    margin-bottom: 0.9rem;
    text-align: center;
  `
  const Button = styled.a`
    display: block;
    color: #fff;
    text-decoration: none;
    background-color: #054d9c;
    padding: 0.5em 1.325em;
    border-radius: 10px;
    font-weight: 700;
    font-size: 0.725em;
  `

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button href={buttonRef} title={buttonLabel}>
        {buttonLabel}
      </Button>
    </Wrapper>
  )
}

const Paragraph = styled.p`
  color: #054d9c;
  font-weight: 200;
  font-size: 1.5em;
  text-align: center;
  margin-bottom: 1.5em;
  @media (max-width: 750px) {
    font-size: 1.1em;
    margin-bottom: 0.5em;
  }
`

const Links: React.FC = () => {
  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: no-wrap;
    flex: 1;
    margin: 4em 0;
    @media (max-width: 750px) {
      flex-direction: column;
      flex-wrap: wrap;
      margin: 2em 0;
    }
  `

  return (
    <Wrapper>
      <SocialLink
        title="Discord"
        description="Chat with the community"
        buttonLabel="Join chat"
        buttonRef="https://discordapp.com/invite/utg8AMq"
      />
      <SocialLink
        title="Twitter"
        description="For all the latest news and articles"
        buttonLabel="Follow on Twitter"
        buttonRef="https://twitter.com/FlutterPortugal"
      />
      <SocialLink
        title="Meetup"
        description="Know when and where is the next event"
        buttonLabel="Join Meetup"
        buttonRef="https://www.meetup.com/FlutterPortugal/"
      />
    </Wrapper>
  )
}

const IndexPage: React.FC = () => (
  <Layout>
    <SEO />
    <BigLogo />
    <Separator />
    <Paragraph>Join the community!</Paragraph>
    <Links />
  </Layout>
)

export default IndexPage
