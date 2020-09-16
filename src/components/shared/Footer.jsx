import React from "react"
import styled from "styled-components"
import { FaLinkedinIn, FaBehance, FaGithub } from "react-icons/fa"
import { FiMail } from "react-icons/fi"

const Footer = () => {
  return (
    <Container>
      <FaLinkedinIn class="icon" />
      <FaGithub class="icon" />
      <FaBehance class="icon" />
      <FiMail class="icon" />
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
