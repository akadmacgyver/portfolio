import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import styled from "styled-components"
import MasterStyle from "../assets/styles/MasterStyle"
import SEO from "../components/shared/SEO"

import Header from "../components/shared/Header"
import Hero from "../components/Welcome/Hero"

const Home = () => {
  const intl = useIntl()
  return (
    <>
      <SEO
        lang={intl.locale}
        description={intl.formatMessage({ id: "description" })}
      />
      <MasterStyle>
        <Header />
        <Container>
          <Hero
            heading={intl.formatMessage({ id: "welcomeHeading" })}
            text={intl.formatMessage({ id: "welcomeText" })}
          />
        </Container>
      </MasterStyle>
    </>
  )
}

export default Home

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`
