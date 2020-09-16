import React from "react"
import styled from "styled-components"
import MasterStyle from "../assets/styles/MasterStyle"
import Header from "../components/shared/Header"
import Heading from "../components/shared/Heading"

const About = () => {
  return (
    <MasterStyle>
      <Header />
      <Container>
        <Heading headingId="About" />
      </Container>
    </MasterStyle>
  )
}

export default About

const Container = styled.div`
  width: 100%;
  padding: 0 32px;
`
