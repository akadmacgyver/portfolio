import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import styled from "styled-components"
import { FormattedMessage } from "gatsby-plugin-intl"
import MasterStyle from "../assets/styles/MasterStyle"
import SEO from "../components/shared/SEO"
import Header from "../components/shared/Header"
import Heading from "../components/shared/Heading"
import Footer from "../components/shared/Footer"

import {
  FaReact,
  FaVuejs,
  FaSass,
  FaLinux,
  FaGithub,
  FaAws,
  FaFigma,
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
        titleSuffix={intl.formatMessage({ id: "about" })}
        description={intl.formatMessage({ id: "description" })}
      />
      <MasterStyle>
        <Header lang={intl.locale} />
        <Footer isInHome={false} />
        <Container>
          <Heading headingId="about" />
          {idsList.map((item) => (
            <>
              <Question
                id={item.question + "__" + intl.locale}
                highlight={item.highlight}
                key={item.question}
                // data-sal="slide-left"
                // data-sal-delay="200"
                // data-sal-easing="ease"
              >
                <FormattedMessage id={item.question} />
              </Question>
              <Answer
              // key={item.answer}
              // data-sal="slide-right"
              // data-sal-delay="400"
              // data-sal-easing="ease"
              >
                {item.answer === "A4" ? (
                  <>
                    <IconsContainer
                      id={"icons__" + intl.locale}
                      data-sal="zoom-in"
                      data-sal-delay="500"
                      data-sal-easing="ease"
                    >
                      <DesignIcons>
                        <FaFigma />
                        <SiAdobexd />
                        <SiAdobephotoshop />
                      </DesignIcons>
                      <FrontIcons id={"frontIcons__" + intl.locale}>
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
                      .map((line) => (
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
const Answer = styled.div`
  float: left;
  width: 270px;
  margin: 50px 0;
  position: relative;

  p {
    margin-bottom: 50px;
    width: 250px;
  }

  /* IconContainer position */
  #icons {
    &__en {
      top: 140px;
    }
    &__pl {
      top: 160px;
    }
  }
`
// Iphone 5 cuts the icons, change in the future
const IconsContainer = styled.div`
  font-size: 1.2rem;
  text-align: right;
  position: absolute;
  right: -40px;

  div svg {
    margin: 0 5px;
  }
  /* Nodejs icon is lose without div parent */
  svg {
    margin-right: 5px;
  }

  #frontIcons {
    &__en {
      margin: 85px 0 20px 0;
    }
    &__pl {
      margin: 85px 0 40px 0;
    }
  }
`
const DesignIcons = styled.div``
const FrontIcons = styled.div``
const GeneralIcons = styled.div`
  margin-top: 40px;
`
const Container = styled.div`
  width: 100%;
  padding: 0 32px;

  @media (min-width: 600px) {
    width: 600px;
  }

  @media (min-width: 768px) {
    padding: 0 100px;
    width: 700px;
  }

  #Q2 {
    &__en {
      ::before {
        top: 40%;
        right: 0;
        width: 225px;
      }
    }
    &__pl {
      ::before {
        top: 32%;
        left: 85px;
        width: 140px;
      }
    }
  }
  #Q3 {
    &__en {
      ::before {
        top: 2px;
        right: 0;
        width: 205px;
      }
    }
      &__pl {
        ::before {
          top: 3px;
          right: 0;
          width: 170px;
        }
      }
    }
  }
  #Q4 {
    &__en {
      ::before {
        top: 2px;
        left: 70px;
        width: 60px;
      }
    }
    &__pl {
      ::before {
        top: 3px;
        left: 75px;
        width: 120px;
      }
    }
  }
  #Q5 {
    &__en {
      ::before {
        top: 55%;
        right: 65px;
        width: 90px;
      }
    }
    &__pl {
      ::before {
        bottom: 26%;
        left: 10px;
        width: 160px;
      }
    }
  }
`
