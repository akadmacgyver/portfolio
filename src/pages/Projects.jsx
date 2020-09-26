import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import styled from "styled-components"
import MasterStyle from "../assets/styles/MasterStyle"
import SEO from "../components/SEO"
import Header from "../components/Header"
import Heading from "../components/Heading"
import Footer from "../components/Footer"
import ProjectItem from "../components/ProjectItem"

const projects = [
  {
    name: "The Topic",
    href: "topic",
    website: "https://thetopic.pl",
    github: "https://github.com/topicpl",
    behance: "https://www.behance.net/gallery/95608867/Topic-app-mockup",
  },
  {
    name: "Superfilmowanie",
    href: "superfilmowanie",
    website: "http://www.superfilmowanie.pl",
    github: "https://github.com/WojciechSala/superfilmowanie",
    behance: "https://www.behance.net/gallery/95514935/Freelance-project",
  },
  {
    name: "On The Roofs",
    href: "otr",
    website: "",
    github: "",
    behance: "https://www.behance.net/gallery/95511857/On-the-roofs-redesign",
  },
  {
    name: "The Bitcast",
    href: "bitcast",
    website: "",
    github: "https://github.com/WojciechSala/thebitcast-web",
    behance: "",
  },
]

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
        <Header lang={intl.locale} />
        <Footer isInHome={false} />
        <Container>
          <Heading headingId="projects" />
          <Inner>
            {projects.map((item) => (
              <ProjectItem></ProjectItem>
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
  @media (min-width: 1320px) {
    width: 1150px;
    column-gap: 150px;
  }
`
