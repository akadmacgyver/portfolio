import React, { useState, useEffect } from "react"
import { useIntl } from "gatsby-plugin-intl"
import styled from "styled-components"
import MasterStyle from "../assets/styles/MasterStyle"
import SEO from "../components/shared/SEO"
import { IoIosArrowDown } from "react-icons/io"

import Header from "../components/shared/Header"
import Box from "../components/shared/Box"
import Footer from "../components/shared/Footer"

const Home = () => {
  // const [isScrolled, setScrollState] = useState(false)

  // useEffect(() => {
  //   document.body.addEventListener("scroll", _ => setScrollState(true))
  // })

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
        <Container>
          <Hero>
            <HeroHeading data-sal="fade" data-sal-easing="ease">
              {intl.formatMessage({ id: "welcomeHeading" })}
              <Box />
            </HeroHeading>
            <HeroText
              data-sal="slide-up"
              data-sal-delay="600"
              data-sal-easing="ease"
            >
              {intl.formatMessage({ id: "welcomeText" })}
            </HeroText>
            <Footer />
          </Hero>
          <IoIosArrowDown id="arrow_down" />
        </Container>
      </MasterStyle>
    </>
  )
}

export default Home

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding-top: 100px;

  #arrow_down {
    position: absolute;
    bottom: 16px;
    left: calc(50% - 16px);
    font-size: 32px;
    opacity: 0.6;
  }
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
