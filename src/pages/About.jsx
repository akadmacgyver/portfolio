import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import styled from "styled-components"
import { FormattedMessage } from "gatsby-plugin-intl"
import MasterStyle from "../assets/styles/MasterStyle"
import SEO from "../components/shared/SEO"
import Header from "../components/shared/Header"
import Heading from "../components/shared/Heading"

import { FiFigma } from "react-icons/fi"
import {
  FaReact,
  FaVuejs,
  FaSass,
  FaLinux,
  FaGithub,
  FaAws,
} from "react-icons/fa"
import {
  SiAdobexd,
  SiAdobephotoshop,
  SiJavascript,
  SiRedux,
  SiNodeDotJs,
  SiGatsby,
} from "react-icons/si"

const idsList = [
  { question: "Q1", answer: "A1", highlight: false },
  { question: "Q2", answer: "A2", highlight: true },
  { question: "Q3", answer: "A3", highlight: true },
  { question: "Q4", answer: "A4", highlight: true },
  { question: "Q5", answer: "A5", highlight: true },
  { question: "Q6", answer: "A6", highlight: false },
]

const About = () => {
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
          <Heading headingId="About" />
          {idsList.map(item => (
            <>
              <Question
                id={item.question + intl.locale}
                highlight={item.highlight}
              >
                <FormattedMessage id={item.question} />
              </Question>
              <Answer>
                {item.answer === "A4" ? (
                  <>
                    <IconsContainer>
                      <DesignIcons>
                        <FiFigma />
                        <SiAdobexd />
                        <SiAdobephotoshop />
                      </DesignIcons>
                      <FrontIcons>
                        <SiJavascript />
                        <FaReact />
                        <SiRedux />
                        <FaVuejs />
                        <SiGatsby />
                        <FaSass />
                      </FrontIcons>
                      <SiNodeDotJs />
                      <GeneralIcons>
                        <FaLinux />
                        <FaGithub />
                        <FaAws />
                      </GeneralIcons>
                    </IconsContainer>
                    {intl
                      .formatMessage({ id: item.answer })
                      .split("/n")
                      .map(line => (
                        <p>{line}</p>
                      ))}
                  </>
                ) : (
                  <FormattedMessage id={item.answer} />
                )}
              </Answer>
            </>
          ))}
        </Container>
      </MasterStyle>
    </>
  )
}

export default About

const Container = styled.div`
  width: 100%;
  padding: 0 32px;

  #Q2en {
    ::before {
      bottom: 0;
      left: 0;
      width: 170px;
    }
  }
  #Q3en {
    ::before {
      top: 2px;
      left: 45px;
      width: 140px;
    }
  }
  #Q4en {
    ::before {
      top: 2px;
      left: 40px;
      width: 40px;
    }
  }
  #Q5en {
    ::before {
      top: 38%;
      right: 65px;
      width: 65px;
    }
  }
`
const Question = styled.div`
  float: right;
  width: 270px;
  text-align: right;
  color: ${({ theme }) => theme.color.grey[800]};
  z-index: 2;
  position: relative;

  ::before {
    content: "";
    position: ${({ highlight }) => (highlight ? "absolute" : "none")};
    z-index: -1;
    height: 16px;
    width: 200px;
    background: ${({ theme }) => theme.color.yellow};
  }
`
const Answer = styled.a`
  float: left;
  width: 270px;
  margin: 50px 0;
  position: relative;

  p {
    margin-bottom: 50px;
    width: 250px;
  }
`
// Iphone 5 cuts the icons, change in the future
const IconsContainer = styled.div`
  font-size: 1.2rem;
  text-align: right;
  position: absolute;
  right: -40px;
  top: 140px;

  div svg {
    margin: 0 5px;
  }
  /* Nodejs icon is lose without div parent */
  svg {
    margin-right: 5px;
  }
`
const DesignIcons = styled.div``
const FrontIcons = styled.div`
  margin: 85px 0 20px 0;
`
const GeneralIcons = styled.div`
  margin-top: 40px;
`
