import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import PropTypes from "prop-types"
import styled from "styled-components"
import Footer from "./Footer"

const Hamburger = ({ isOpen }) => {
  return (
    <Container isOpen={isOpen}>
      <Inner>
        <TextContainer>
          <a href="about">
            <FormattedMessage id="About" />
          </a>
          <a href="projects">
            <FormattedMessage id="Projects" />
          </a>
          <a href="resume">
            <FormattedMessage id="Resume" />
          </a>
        </TextContainer>
      </Inner>
      <Footer />
    </Container>
  )
}

Hamburger.defaultProps = {
  isOpen: false,
}

Hamburger.propTypes = {
  isOpen: PropTypes.bool,
}

export default Hamburger

const Container = styled.div`
  top: 0;
  left: 0;
  padding: 32px;
  width: 100%;
  height: 100%;
  z-index: -1;
  position: fixed;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.yellow};
  transform: translateY(${({ isOpen }) => (isOpen ? "0" : "-100%")});
  color: ${({ isOpen }) => (isOpen ? "#000" : "#ffff00")};
`
const Inner = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  margin-top: 32px;
  display: flex;
  align-items: center;
`
const TextContainer = styled.div`
  width: 100%;
  height: 350px;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: 3.125rem;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`