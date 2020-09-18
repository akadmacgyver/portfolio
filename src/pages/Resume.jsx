import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"
import styled from "styled-components"
import MasterStyle from "../assets/styles/MasterStyle"
import Header from "../components/shared/Header"
import Heading from "../components/shared/Heading"
import SEO from "../components/shared/SEO"

const Resume = () => {
  const intl = useIntl()

  // TODO: Find a solution for picking the right pdf file dependent on intl.locale
  const resume = useStaticQuery(graphql`
    {
      pdf: file(name: { eq: "resumePLs" }) {
        name
        extension
        publicURL
      }
    }
  `)

  return (
    <>
      <SEO
        lang={intl.locale}
        description={intl.formatMessage({ id: "description" })}
      />
      <MasterStyle>
        <Header />
        <Container>
          <Heading headingId="resume" />
          <ButtonContainer>
            <Button
              href={resume.pdf.publicURL}
              target="_blank"
              rel="noreferrer"
            >
              <FormattedMessage id="showResume" />
            </Button>
            <Button href={resume.pdf.publicURL} download>
              <FormattedMessage id="downloadResume" />
            </Button>
          </ButtonContainer>
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
const ButtonContainer = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Button = styled.a`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.color.yellow};
  color: ${({ theme }) => theme.color.black};
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  border-radius: 5px;

  -webkit-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);

  :hover {
    cursor: pointer;
  }
`
