import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

const Logo = ({ isOpen, isInHome }) => {
  return (
    <Link to="/">
      <Container
        isOpen={isOpen}
        isInHome={isInHome}
        data-sal="zoom-in"
        data-sal-easing="ease-out"
      >
        S
      </Container>
    </Link>
  )
}
Logo.defaultProps = {
  isOpen: false,
  isInHome: false,
}

Logo.propTypes = {
  isOpen: PropTypes.bool,
  isInHome: PropTypes.bool,
}

export default Logo

const Container = styled.div`
  width: 50px;
  height: 50px;
  z-index: 998;
  margin-left: -1.1rem;
  font-family: ${({ theme }) => theme.font.familySans};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ isInHome, isOpen }) =>
    isInHome ? "white" : isOpen ? "black" : "black"};
  font-size: 2.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color 0.25s ease-in, transform 0.5s ease-out;

  :hover {
    color: ${({ theme }) => theme.color.grey[800]};
    transform: rotate(-30deg);
  }
`
