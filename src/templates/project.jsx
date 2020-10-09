import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import { graphql } from "gatsby"
// import Img from "gatsby-image"
import MasterStyle from "../assets/styles/MasterStyle"
import styled from "styled-components"
import SEO from "../components/SEO"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Specs from "../components/ProjectSpecs"
import SectionPlain from "../components/ProjectSectionPlain"
import SectionBullet from "../components/ProjectSectionBullet"
// import NextProj from "../components/ProjectNext"

const Project = (props) => {
  const intl = useIntl()
  const project = props.data.mongodbPortfolioProjects

  return (
    <>
      <SEO
        lang={intl.locale}
        titleSuffix={project.name}
        description={intl.formatMessage({ id: "description" })}
      />
      <MasterStyle>
        <Header lang={intl.locale} />
        <Footer location="project" />
        <Container>
          {/* <Img fixed={project.img} /> */}
          <Specs
            title={project.name}
            timeline={project.timeline}
            role={project.role}
          />
          <SectionPlain headingId="proj.about" content={project.about} />
          <SectionBullet headingId="proj.goals" bullets={project.goals} />
          <SectionBullet headingId="proj.design" bullets={project.design} />
          <SectionBullet headingId="proj.stack" bullets={project.stack} />
          <SectionPlain
            headingId="proj.conclusion"
            content={project.conclusion}
          />
          {/* <NextProj img="otrIMG" href={project.nextProjHref} /> */}
        </Container>
      </MasterStyle>
    </>
  )
}

export default Project

export const pageQuery = graphql`
  query($href: String, $lang: String) {
    mongodbPortfolioProjects(href: { eq: $href }, language: { eq: $lang }) {
      behance
      github
      href
      name
      website
      language
      timeline
      role
      about
      goals
      design
      stack
      conclusion
      nextProjHref
    }
  }
`

const Container = styled.div`
  width: 100%;
  padding: 0 32px;
  margin: 200px auto;

  img {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 700px;
  }
`
