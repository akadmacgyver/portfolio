import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { FaLinkedinIn, FaBehance, FaGithub } from "react-icons/fa"
import { FiMail } from "react-icons/fi"

const Footer = ({ location }) => {
  return (
    <Container
      location={location}
      data-sal="slide-up"
      data-sal-delay="200"
      data-sal-easing="ease-out"
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
  location: "",
}

Footer.propTypes = {
  location: PropTypes.string,
}

export default Footer

const Container = styled.footer`
  z-index: 998;
  width: 150px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.color.black};
  display: ${({ location }) => (location === "hamburger" ? "flex" : "none")};

  .icon {
    font-size: 20px;
    transition: color 0.25s ease-out, transform 0.5s ease-out 0.1s;

    :hover {
      color: ${({ theme }) => theme.color.grey[800]};
      transform: rotate(-15deg) scale(1.1);
    }
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    right: 100px;
    bottom: 50px;
  }

  @media (max-width: ${({ location }) =>
      location === "about"
        ? "1100px"
        : location === "projects"
        ? "1250px"
        : "none"}) {
    height: 150px;
    bottom: 25px;
    right: -25px;
    flex-direction: column;
  }
`
