import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import styled from "styled-components"
import MasterStyle from "../assets/styles/MasterStyle"
import SEO from "../components/shared/SEO"
import Header from "../components/shared/Header"
import Heading from "../components/shared/Heading"
import Footer from "../components/shared/Footer"

const Projects = () => {
  const intl = useIntl()
  return (
    <>
      <SEO
        lang={intl.locale}
        titleSuffix={intl.formatMessage({ id: "projects" })}
        description={intl.formatMessage({ id: "description" })}
      />
      <MasterStyle>
        <Header />
        <Footer/>
        <Container>
          <Heading headingId="projects" />
          <Inner>
            {/* map render from project list and add animations*/}
            <ProjectLink href="projects/proj"></ProjectLink>
            <ProjectLink></ProjectLink>
            <ProjectLink></ProjectLink>
            <ProjectLink></ProjectLink>
            <ProjectLink></ProjectLink>
            <ProjectLink></ProjectLink>
          </Inner>
        </Container>
      </MasterStyle>
    </>
  )
}

export default Projects

const Container = styled.div`
  width: 100%;
  padding: 0 32px;
  padding-bottom: 100px;

  @media (min-width: 768px) {
    padding: 0 100px;
    padding-bottom: 100px;
  }
`
const Inner = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-items: center;
  grid-gap: 50px;

  @media (min-width: 768px) {
    /* width: 768px; */
    grid-template-columns: repeat(2, 1fr);
    column-gap: 100px;
  }
  @media (min-width: 1300px) {
    width: 1150px;
    column-gap: 150px;
  }

`
const ProjectLink = styled.a`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  background-color: ${({ theme }) => theme.color.yellow};

  -webkit-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);

  :hover {
    cursor: pointer;
    /* zoom in img */
  }

  @media (min-width: 364px) {
    width: 300px;
    height: 300px;
    padding: 0;
  }

  @media (min-width: 768px) {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 100%;

    :nth-child(even) {
      margin-top: 100px;
    }
  }

  @media (min-width: 1300px) {
    width: 500px;
    height: 500px;
    padding: 0;
  }
`
