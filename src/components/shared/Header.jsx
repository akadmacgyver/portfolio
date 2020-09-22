import React, { useState } from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import PropTypes from "prop-types"
import { Link } from 'gatsby'
import styled from "styled-components"
import Button from "./HeaderButton"
import Hamburger from "./Hamburger"

const Header = ({ lang }) => {
  const [isMenuOpen, setMenuState] = useState(false)

  const toggleMenu = () => {
    setMenuState(!isMenuOpen)
  }

  return (
    <Container>
      <Link to="/">Wojciech Sala</Link>
      <DesktopMenu>
        <Link to={'/' + lang + "/About"}>
          <FormattedMessage id="about" />
        </Link>
        <Link to={'/' + lang + "/Projects"}>
          <FormattedMessage id="projects" />
        </Link>
        <Link to={'/' + lang + "/Resume"}>
          <FormattedMessage id="resume" />
        </Link>
      </DesktopMenu>
      <Button isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Hamburger isOpen={isMenuOpen} lang={lang}/>
    </Container>
  )
}

Header.defaultProps = {
  lang: 'en',
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

  a {
    position: relative;
    z-index: 2;

    ::before {
      content: "";
      position: absolute;
      width: 0;
      z-index: -1;
      bottom: -2px;
      left: -10%;
      height: 80%;
      background-color: ${({ theme }) => theme.color.yellow};
      transition: width 0.2s ease-out;
    }

    :hover {
      ::before {
        width: 130%;
      }
    }
  }
`

const DesktopMenu = styled.div`
  font-family: ${({ theme }) => theme.font.familySans};
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 250px; 

  @media (max-width: 767px) {
    display: none;
  }
`
