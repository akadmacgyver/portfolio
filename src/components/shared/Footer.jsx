import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { FaLinkedinIn, FaBehance, FaGithub } from "react-icons/fa"
import { FiMail } from "react-icons/fi"

const Footer = ({ isInHamburger, isInHome }) => {
  return (
    <Container
      isInHome={isInHome}
      data-sal="slide-up"
      data-sal-delay={ isInHome ? (isInHamburger ? "200" : "900") : "200"}
      data-sal-easing="ease"
    >
      <a
        href="https://www.linkedin.com/in/wojciechsala/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn class="icon" />
      </a>
      <a
        href="https://github.com/WojciechSala"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub class="icon" />
      </a>
      <a
        href="https://www.behance.net/WojciechSala"
        target="_blank"
        rel="noreferrer"
      >
        <FaBehance class="icon" />
      </a>
      <a
        href="mailto: wojteksala190@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <FiMail class="icon" />
      </a>
    </Container>
  )
}
Footer.defaultProps = {
  isInHamburger: false,
  isInHome: true,
}

Footer.propTypes = {
  isInHamburger: PropTypes.bool,
  isInHome: PropTypes.bool,
}

export default Footer

const Container = styled.footer`
  width: 150px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  display: ${({isInHome}) => ( isInHome ? 'flex' : 'none')};

  .icon {
    font-size: 20px;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: ${({isInHome}) => ( isInHome ? 'row' : 'column' )};
    align-items: space-between;
    position: ${({isInHome}) => ( isInHome ? 'static' : 'absolute' )};
    bottom: 25px;
    right: -25px;
    height: 150px;
  }

  @media (min-width: 1530px) {
    height: auto;
    flex-direction: row;
    align-items: center;
    right: 100px;
    bottom: 50px;
  }
`
