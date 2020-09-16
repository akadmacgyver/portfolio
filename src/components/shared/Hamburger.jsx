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
          <a>
            <FormattedMessage id="About" />
          </a>
          <a>
            <FormattedMessage id="Projects" />
          </a>
          <a>
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
  transition: ${({ isOpen }) =>
    isOpen
      ? "transform 0.3s 0s, color 0.35s 0.2s ease-in-out"
      : "transform 0.3s 0s, color 0s 0s ease-in-out"};
  -webkit-transition: ${({ isOpen }) =>
    isOpen
      ? "transform 0.3s 0s, color 0.35s 0.2s ease-in-out"
      : "transform 0.3s 0s, color 0s 0s ease-in-out"};
  -moz-transition: ${({ isOpen }) =>
    isOpen
      ? "transform 0.3s 0s, color 0.35s 0.2s ease-in-out"
      : "transform 0.3s 0s, color 0s 0s ease-in-out"};
  -ms-transition: ${({ isOpen }) =>
    isOpen
      ? "transform 0.3s 0s, color 0.35s 0.2s ease-in-out"
      : "transform 0.3s 0s, color 0s 0s ease-in-out"};
  -o-transition: ${({ isOpen }) =>
    isOpen
      ? "transform 0.3s 0s, color 0.35s 0.2s ease-in-out"
      : "transform 0.3s 0s, color 0s 0s ease-in-out"};
  -webkit-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
`
const Inner = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  margin-top: 30px;
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
