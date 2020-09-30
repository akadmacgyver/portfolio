import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import PropTypes from "prop-types"
import styled from "styled-components"
import ReactTextRotator from "react-text-rotator"

const HomeAbout = ({ passions }) => {
  return (
    <Container data-sal="fade" data-sal-easing="ease-out">
      <Name>WOJCIECH SALA,</Name>
      <span>
        <FormattedMessage id="homePassionate" />
      </span>
      <span>
        <FormattedMessage id="homeAbout" />
      </span>
      <span>
        <ReactTextRotator content={passions} time={5000} />
      </span>
    </Container>
  )
}

HomeAbout.defaultProps = {
  passions: [""],
}

HomeAbout.propTypes = {
  passions: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
}

export default HomeAbout

const Container = styled.div`
  pointer-events: none;
  z-index: 990;
  position: absolute;
  left: 32px;
  bottom: 50px;
  color: ${({ theme }) => theme.color.black};
  font-size: 3.125rem;

  span {
    display: block;
  }

  @media (min-width: 768px) {
    left: 100px;
    font-size: 6.25rem;
  }
`
const Name = styled.div`
  font-size: 1rem;
  opacity: 0.6;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`
