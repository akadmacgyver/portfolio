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
              <ProjectsItem
                {...item.node}
                lang={intl.locale}
                img={
                  item.node.href === "topic"
                    ? props.data.topicImg.childImageSharp.fixed
                    : item.node.href === "superfilmowanie"
                    ? props.data.superfilmowanieImg.childImageSharp.fixed
                    : item.node.href === "otr"
                    ? props.data.otrImg.childImageSharp.fixed
                    : item.node.href === "bitcast"
                    ? props.data.bitcastImg.childImageSharp.fixed
                    : null
                }
              />
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
          name
          href
          language
        }
      }
    }
    topicImg: file(relativePath: { eq: "data/topic-logo.png" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    bitcastImg: file(relativePath: { eq: "data/bitcast-logo.png" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    otrImg: file(relativePath: { eq: "data/otr-logo.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    superfilmowanieImg: file(relativePath: { eq: "data/sf-logo.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
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
