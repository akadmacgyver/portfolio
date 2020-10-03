import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import MasterStyle from "../assets/styles/MasterStyle"
import styled from "styled-components"
import SEO from "../components/SEO"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Specs from "../components/ProjectSpecs"
import SectionPlain from "../components/ProjectSectionPlain"
import SectionBullet from "../components/ProjectSectionBullet"
import NextProj from "../components/ProjectNext"

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
            title="Topic"
            timeline={project.timeline}
            role="UI/UX, frontend"
          />
          <SectionPlain headingId="About" contentId="ASD LONG TEXT" />
          <SectionBullet
            headingId="Goals"
            bullets={[
              "Bullet one",
              "Bullet two",
              "Bullet three",
              "Bullet four",
            ]}
          />
          <NextProj img="otrIMG" href="otr" />
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
      # img
    }
  }
`

const Container = styled.div`
  width: 100%;
  padding: 0 32px;
  margin: 0 auto;

  img {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 700px;
  }
`
