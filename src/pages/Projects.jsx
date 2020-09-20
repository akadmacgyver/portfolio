import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import styled from "styled-components"
import MasterStyle from "../assets/styles/MasterStyle"
import SEO from "../components/shared/SEO"
import Header from "../components/shared/Header"
import Heading from "../components/shared/Heading"

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
        <Container>
          <Heading headingId="projects" />
          <Inner>
            {/* map render from project list */}
            <ProjectLink href="projects/proj"></ProjectLink>
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
`
const Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const ProjectLink = styled.a`
  width: 300px;
  height: 300px;
  margin-bottom: 50px;
  /* change to img of project */
  background-color: ${({ theme }) => theme.color.yellow};

  -webkit-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);

  :hover {
    cursor: pointer;
    /* zoom in img */
  }
`
