import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import styled from "styled-components"
import MasterStyle from "../assets/styles/MasterStyle"
import SEO from "../components/SEO"
import Header from "../components/Header"
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
        <Foreground>
          <Header lang={intl.locale} isInHome={true} />
          <Footer location="home" />
        </Foreground>
        <Background>
          <iframe
            allowtransparency="false"
            title="Fluid Canvas"
            frameborder="0"
            src="/fluid.html"
          ></iframe>
        </Background>
      </MasterStyle>
    </>
  )
}

export default Home

const Background = styled.main`
  height: 100vh;
  width: 100vw;

  iframe {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
  }
`
const Foreground = styled.div``
