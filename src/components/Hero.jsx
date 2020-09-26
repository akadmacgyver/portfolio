import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Hero = ({ heading, text }) => {
  return (
    <Inner>
      <Heading>{heading}</Heading>
      <Text>{text}</Text>
    </Inner>
  )
}

Hero.defaultProps = {
  heading: ``,
  text: ``,
}

Hero.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
}

export default Hero

const Inner = styled.div`
  /* 150px width because footer is 150px and is centered */
  width: 150px;
  margin: 0 auto;
`

const Heading = styled.a`
  font-size: 1.875rem;
  margin-left: -70px;
  width: 60vw;
  position: relative;
  z-index: 2;

  /* THE YELLOW BOX */
  ::before {
    content: "";
    position: absolute;
    left: 70px;
    bottom: 0;
    z-index: -1;
    width: 200px;
    height: 270px;
    background-color: ${({ theme }) => theme.color.yellow};
  }
`
const Text = styled.div`
  /* with width set to 215px there's no cuts on text */
  width: 215px;
  margin: 30px 0 40px 0;
`
