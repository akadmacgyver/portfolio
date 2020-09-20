import React, { useState } from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import styled from "styled-components"
import Button from "./HeaderButton"
import Hamburger from "./Hamburger"

const Header = () => {
  const [isMenuOpen, setMenuState] = useState(false)

  const toggleMenu = () => {
    setMenuState(!isMenuOpen)
  }

  return (
    <Container>
      <a href="/">Wojciech Sala</a>
      <DesktopMenu>
          <a href="about">
            <FormattedMessage id="about" />
          </a>
          <a href="projects">
            <FormattedMessage id="projects" />
          </a>
          <a href="resume">
            <FormattedMessage id="resume" />
          </a>
      </DesktopMenu>
      <Button isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Hamburger isOpen={isMenuOpen} />
    </Container>
  )
}

export default Header

const Container = styled.header`
  top: 0;
  left: 0;
  z-index: 998;
  width: 100vw;
  height: 60px;
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  font-size: 1.2rem;
  background-color: rgba(255, 255, 255, 0.8);

  @media (min-width: 768px) {
    padding: 0 100px;
  }
`

const DesktopMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 250px; 

  @media (max-width: 767px) {
    display: none;
  }
`
