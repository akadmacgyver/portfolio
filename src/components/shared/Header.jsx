import React, { useState } from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import Button from "./HeaderButton"
import Hamburger from "./Hamburger"
import Logo from "./Logo"
import Resume from "../Resume/Resume"

const Header = ({ lang }) => {
  const [isMenuOpen, setMenuState] = useState(false)

  const toggleMenu = () => {
    setMenuState(!isMenuOpen)
  }

  return (
    <Container>
      <Logo />
      <DesktopMenu
        data-sal="slide-down"
        data-sal-delay="200"
        data-sal-easing="ease-out"
      >
        <Link to={"/" + lang + "/About"}>
          <FormattedMessage id="aboutUpper" />
        </Link>
        <Link to={"/" + lang + "/Projects"}>
          <FormattedMessage id="projectsUpper" />
        </Link>
        <Resume />
      </DesktopMenu>
      <Button isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Hamburger isOpen={isMenuOpen} lang={lang} />
    </Container>
  )
}

Header.defaultProps = {
  lang: "en",
}

Header.propTypes = {
  lang: PropTypes.string,
}

export default Header

const Container = styled.header`
  top: 0;
  left: 0;
  z-index: 998;
  width: 100vw;
  height: 100px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  font-size: 1.2rem;

  @media (min-width: 768px) {
    padding: 0 100px;
  }
`

const DesktopMenu = styled.div`
  font-family: ${({ theme }) => theme.font.familySans};
  background-color: ${({ theme }) => theme.color.white};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: 0.9rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 300px;
  height: 100px;

  a {
    height: 100px;
    width: 100px;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: background-color 0.25s ease-out, color 0.25s ease-out;

    :hover {
      color: ${({ theme }) => theme.color.white};
      background-color: ${({ theme }) => theme.color.black};
    }
  }

  @media (max-width: 767px) {
    display: none;
  }
`
