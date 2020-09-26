import React from "react"
import styled from "styled-components"
import { useIntl } from "gatsby-plugin-intl"
import MasterStyle from "../assets/styles/MasterStyle"
import SEO from "../components/SEO"
import Header from "../components/Header"
import Heading from "../components/Heading"
import Footer from "../components/Footer"

const Page404 = () => {
  const intl = useIntl()
  return (
    <>
      <SEO
        lang={intl.locale}
        titleSuffix={intl.formatMessage({ id: "404" })}
        description={intl.formatMessage({ id: "description" })}
      />
      <MasterStyle>
        <Header lang={intl.locale} />
        <Footer isInHome={false} />
        <Container data-sal="slide-right" data-sal-easing="ease">
          <Heading headingId="oops" />
        </Container>
      </MasterStyle>
    </>
  )
}

export default Page404

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 32px;

  @media (min-width: 768px) {
    padding: 0 100px;
    padding-bottom: 100px;
  }
`
