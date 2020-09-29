import React from "react"
import { Link } from "gatsby"
import { FormattedMessage } from "gatsby-plugin-intl"
import PropTypes from "prop-types"
import styled from "styled-components"
import Footer from "./Footer"
import Resume from "./Resume"

const Hamburger = ({ isOpen, lang }) => {
  return (
    <Container isOpen={isOpen}>
      <Inner>
        <TextContainer data-sal="slide-left" data-sal-easing="ease-out">
          <Link to={"/" + lang + "/About"}>
            <FormattedMessage id="about" />
          </Link>
          <Link to={"/" + lang + "/Projects"}>
            <FormattedMessage id="projects" />
          </Link>
          <Resume isInHamburger={isOpen} />
        </TextContainer>
      </Inner>
      <Footer location="hamburger" />
    </Container>
  )
}

Hamburger.defaultProps = {
  isOpen: false,
  lang: "en",
}

Hamburger.propTypes = {
  isOpen: PropTypes.bool,
  lang: PropTypes.string,
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
  font-family: ${({ theme }) => theme.font.familySans};
  transform: translateY(${({ isOpen }) => (isOpen ? "0" : "-100%")});
  color: ${({ isOpen }) => (isOpen ? "#000" : "#ffff00")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};

  transition: ${({ isOpen }) =>
    isOpen
      ? "opacity 0.3s 0s, color 0.35s 0.2s ease-in-out"
      : "opacity 0.3s 0s, color 0s 0s ease-in-out"};

  -webkit-transition: ${({ isOpen }) =>
    isOpen
      ? "opacity 0.3s 0s, color 0.35s 0.2s ease-in-out"
      : "opacity 0.3s 0s, color 0s 0s ease-in-out"};

  -moz-transition: ${({ isOpen }) =>
    isOpen
      ? "opacity 0.3s 0s, color 0.35s 0.2s ease-in-out"
      : "opacity 0.3s 0s, color 0s 0s ease-in-out"};

  -ms-transition: ${({ isOpen }) =>
    isOpen
      ? "opacity 0.3s 0s, color 0.35s 0.2s ease-in-out"
      : "opacity 0.3s 0s, color 0s 0s ease-in-out"};

  -o-transition: ${({ isOpen }) =>
    isOpen
      ? "opacity 0.3s 0s, color 0.35s 0.2s ease-in-out"
      : "opacity 0.3s 0s, color 0s 0s ease-in-out"};

  @media (min-width: 768px) {
    padding: 32px 100px;
  }
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
