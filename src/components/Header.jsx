import React, { useState } from 'react'
import { FormattedMessage } from 'gatsby-plugin-intl'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Button from './HeaderButton'
import Hamburger from './Hamburger'
import Logo from './Logo'
import Resume from './Resume'

const Header = ({ lang }) => {
  const [isMenuOpen, setMenuState] = useState(false)

  const toggleMenu = () => {
    setMenuState(!isMenuOpen)
  }

  return (
    <Container>
      <Logo />
      <DesktopMenu
        data-sal="zoom-in"
        data-sal-delay="200"
        data-sal-easing="ease-out"
      >
        <Link to={'/' + lang + '/About'}>
          <FormattedMessage id="aboutUpper" />
        </Link>
        <Link to={'/' + lang + '/Projects'}>
          <FormattedMessage id="projectsUpper" />
        </Link>
        <Resume lang={lang} />
      </DesktopMenu>
      <Button isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Hamburger isOpen={isMenuOpen} lang={lang} />
    </Container>
  )
}

Header.defaultProps = {
  lang: 'en'
}

Header.propTypes = {
  lang: PropTypes.string
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
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: 1.1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 100px;

  a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: color 0.25s ease-out;

    ::after {
      content: '';
      background-color: ${({ theme }) => theme.color.black};
      width: 0;
      height: 1px;
      position: absolute;
      bottom: -3px;
      left: 0;
      transition: width 0.25s ease-out;
    }

    :hover {
      color: ${({ theme }) => theme.color.grey[800]};
      ::after {
        width: 100%;
      }
    }
  }

  @media (max-width: 767px) {
    display: none;
  }
`
