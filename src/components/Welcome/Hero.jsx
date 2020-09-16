import React from "react"
import styled from "styled-components"
import Footer from "../shared/Footer"

const Hero = ({ heading, text }) => {
  return (
    <Container>
      <Heading>{heading}</Heading>
      <Inner>
        <Text>{text}</Text>
        <Footer />
      </Inner>
    </Container>
  )
}

export default Hero

const Container = styled.main`
  width: 100%;
`
const Inner = styled.div`
  /* 150px width because footer is 150px and is centered */
  width: 150px;
  margin: 0 auto;
`

const Heading = styled.div`
  font-size: 1.875rem;
  margin-left: 40px;
`
const Text = styled.div`
  /* with width set to 215px there's no cuts on text */
  width: 215px;
  margin: 30px 0 40px 0;
`
