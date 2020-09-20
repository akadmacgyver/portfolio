import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import { useIntl } from "gatsby-plugin-intl"
import styled from "styled-components"
import MasterStyle from "../assets/styles/MasterStyle"
import SEO from "../components/shared/SEO"
import Header from "../components/shared/Header"
import Heading from "../components/shared/Heading"
import Footer from "../components/shared/Footer"
import resumePL from "../data/resumePLs.pdf"
import resumeEN from "../data/resumeENs.pdf"

const Resume = () => {
  const intl = useIntl()

  const pickResume = () => {
    if(intl.locale === 'pl') return resumePL
    else return resumeEN
  }

  return (
    <>
      <SEO
        lang={intl.locale}
        titleSuffix={intl.formatMessage({ id: "resume" })}
        description={intl.formatMessage({ id: "description" })}
      />
      <MasterStyle>
        <Header />
        <Footer isInHome={false} />
        <Container>
          <Heading headingId="resume" />
          <ButtonContainer>
            <Button
              href={pickResume()}
              target="_blank"
              rel="noreferrer"
            >
              <FormattedMessage id="showResume" />
            </Button>
            <Button href={pickResume()} download>
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

  @media (min-width: 768px) {
    padding: 0 100px;
  }
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

  @media (min-width: 768px) {
    width: 340px;
  }

  :hover {
    cursor: pointer;
  }
`
