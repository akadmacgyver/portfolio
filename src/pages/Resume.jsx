import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import styled from "styled-components"
import MasterStyle from "../assets/styles/MasterStyle"
import Header from "../components/shared/Header"
import Heading from "../components/shared/Heading"
import SEO from "../components/shared/SEO"

const Resume = () => {
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
          <Heading headingId="Resume" />
        </Container>
      </MasterStyle>
    </>
  )
}

export default Resume

const Container = styled.div`
  width: 100%;
  padding: 0 32px;
`
