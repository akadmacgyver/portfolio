import React from "react"
import styled from "styled-components"
import { FaLinkedinIn, FaBehance, FaGithub } from "react-icons/fa"
import { FiMail } from "react-icons/fi"

const Footer = () => {
  return (
    <Container>
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

export default Footer

const Container = styled.footer`
  width: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .icon {
    font-size: 20px;
  }
`
