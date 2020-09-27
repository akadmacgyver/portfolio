import React from "react"
import styled from "styled-components"
import { useIntl } from "gatsby-plugin-intl"
import { FormattedMessage } from "gatsby-plugin-intl"
import MasterStyle from "../assets/styles/MasterStyle"
import SEO from "../components/SEO"
import Header from "../components/Header"
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
        <Footer location="404" />
        <Container data-sal="slide-right" data-sal-easing="ease">
          <Text>
            <FormattedMessage id="oops" />
          </Text>
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
  }
`
const Text = styled.div`
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: 10vw;
  padding-top: 200px;

  @media (min-width: 768px) {
    font-size: 5rem;
  }

  @media (min-width: 1000px) {
    font-size: 6.25rem;
  }
`
