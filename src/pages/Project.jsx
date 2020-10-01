import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import MasterStyle from "../assets/styles/MasterStyle"
import styled from "styled-components"
import SEO from "../components/SEO"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Specs from "../components/Project/ProjectSpecs"
import SectionPlain from "../components/Project/ProjectSectionPlain"
import SectionBullet from "../components/Project/ProjectSectionBullet"

const Project = () => {
  const intl = useIntl()

  return (
    <>
      <SEO
        lang={intl.locale}
        titleSuffix="PROJ_NAME"
        description={intl.formatMessage({ id: "description" })}
      />
      <MasterStyle>
        <Header lang={intl.locale} />
        <Footer location="project" />
        <Container>
          <img />
          <Specs title="Topic" timeline="2 months" role="UI/UX, frontend" />
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
        </Container>
      </MasterStyle>
    </>
  )
}

export default Project

const Container = styled.div`
  width: 100%;
  padding: 0 32px;
  margin: 0 auto;

  img {
    width: 100%;
  }
`
