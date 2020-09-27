import React, { useState, useEffect } from "react"
import { useIntl } from "gatsby-plugin-intl"
import styled from "styled-components"
import MasterStyle from "../assets/styles/MasterStyle"
import SEO from "../components/SEO"
import Header from "../components/Header"
import Box from "../components/Box"
import Footer from "../components/Footer"

const Home = () => {
  const intl = useIntl()
  return (
    <>
      <SEO
        lang={intl.locale}
        titleSuffix="Portfolio"
        description={intl.formatMessage({ id: "description" })}
      />
      <MasterStyle>
        <Header lang={intl.locale} />
        <Footer location="home" />
        <Container>
          {/* <Hero>
            <HeroHeading data-sal="fade" data-sal-easing="ease">
              <Box />
              {intl.formatMessage({ id: "welcomeHeading" })}
            </HeroHeading>
            <HeroText
              data-sal="slide-up"
              data-sal-delay="600"
              data-sal-easing="ease"
            >
              {intl.formatMessage({ id: "welcomeText" })}
            </HeroText>
            <Footer />
          </Hero> */}
        </Container>
      </MasterStyle>
    </>
  )
}

export default Home

const Container = styled.div`
  /* height: calc(100vh - 150px);
  margin: 150px auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center; */
  width: 100vw;
  height: 100vh;
`
const Hero = styled.div`
  width: 150px;
  margin: 0 auto;
`
const HeroHeading = styled.a`
  font-size: 1.875rem;
  margin-left: -80px;
  width: 60vw;
  position: relative;
  z-index: 2;
`
const HeroText = styled.div`
  /* opacity: ${({ isScrolled }) => (isScrolled ? "0" : "1")}; */
  width: 215px;
  margin: 30px 0 40px 0;
`
