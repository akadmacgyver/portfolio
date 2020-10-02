import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import styled from "styled-components"
import MasterStyle from "../assets/styles/MasterStyle"
import SEO from "../components/SEO"
import Header from "../components/Header"
import Heading from "../components/Heading"
import Footer from "../components/Footer"
import ProjectsItem from "../components/ProjectsItem"
import { graphql } from "gatsby"

const Projects = (props) => {
  const intl = useIntl()
  const projects = props.data.allMongodbPortfolioProjects.edges

  return (
    <>
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
              <ProjectsItem {...item.node} />
            ))}
          </Inner>
        </Container>
      </MasterStyle>
    </>
  )
}

export default Projects

export const pageQuery = graphql`
  query {
    allMongodbPortfolioProjects {
      edges {
        node {
          id
          name
          behance
          github
          href
          website
        }
      }
    }
  }
`

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
