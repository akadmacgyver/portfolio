import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import styled from "styled-components"
import MasterStyle from "../assets/styles/MasterStyle"
import SEO from "../components/SEO"
import Header from "../components/Header"
import Heading from "../components/Heading"
import Footer from "../components/Footer"
import ProjectItem from "../components/ProjectItem"
// import { Router } from "@reach/router"
// import Project from "../templates/project"

const projects = [
  {
    name: "Topic",
    href: "topic",
    website: "https://thetopic.pl",
    github: "https://github.com/topicpl",
    behance: "https://www.behance.net/gallery/95608867/Topic-app-mockup",
    roleId: "topicRole",
  },
  {
    name: "Superfilmowanie",
    href: "superfilmowanie",
    website: "http://www.superfilmowanie.pl",
    github: "https://github.com/WojciechSala/superfilmowanie",
    behance: "https://www.behance.net/gallery/95514935/Freelance-project",
    roleId: "superfilmowanieRole",
  },
  {
    name: "On The Roofs",
    href: "otr",
    website: "https://www.behance.net/gallery/95511857/On-the-roofs-redesign",
    github: "",
    behance: "https://www.behance.net/gallery/95511857/On-the-roofs-redesign",
    roleId: "otrRole",
  },
  {
    name: "Bitcast",
    href: "bitcast",
    website: "https://github.com/WojciechSala/thebitcast-web",
    github: "https://github.com/WojciechSala/thebitcast-web",
    behance: "",
    roleId: "bitcastRole",
  },
]

const Projects = () => {
  const intl = useIntl()
  return (
    <>
      {/* <Router basepath="projects">
        <Project path="/:id" />
      </Router> */}
      <SEO
        lang={intl.locale}
        titleSuffix={intl.formatMessage({ id: "projects" })}
        description={intl.formatMessage({ id: "description" })}
      />
      <MasterStyle>
        <Header lang={intl.locale} />
        <Footer location="projects" />
        <Container>
          <Heading headingId="projects" />
          <Inner>
            {projects.map((item) => (
              <ProjectItem {...item} />
            ))}
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
  margin: 0 auto;
  margin-bottom: 100px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    width: 700px;
    padding: 0;
  }
`
const Inner = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-items: center;
  grid-gap: 50px;
  column-gap: 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    column-gap: 100px;
  }
`
