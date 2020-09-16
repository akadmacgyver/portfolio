import React, { useState } from "react"
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
      {isMenuOpen ? (
        <Button type="close" onClick={toggleMenu} />
      ) : (
        <Button type="menu" onClick={toggleMenu} />
      )}
      <Hamburger isOpen={isMenuOpen} />
    </Container>
  )
}

export default Header

const Container = styled.header`
  top: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
  height: 60px;
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  font-size: 1.2rem;
`
