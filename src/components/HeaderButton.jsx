import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const HeaderButton = ({ isOpen, toggleMenu, isInHome }) => {
  return (
    <Container onClick={toggleMenu}>
      <MenuInner isOpen={isOpen} isInHome={isInHome}></MenuInner>
    </Container>
  )
}
HeaderButton.defaultProps = {
  isOpen: false,
  toggleMenu: () => {},
  isInHome: false,
}

HeaderButton.propTypes = {
  isOpen: PropTypes.bool,
  toggleMenu: PropTypes.func,
  isInHome: PropTypes.bool,
}

export default HeaderButton

const Container = styled.button`
  border: none;
  outline: none;
  background: none;
  z-index: 999;
  width: 32px;
  height: 32px;

  :hover {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    display: none;
  }
`
const MenuInner = styled.div`
  width: 24px;
  height: 13px;
  position: relative;

  ::before,
  ::after {
    content: "";
    position: absolute;
    background: ${({ isInHome, isOpen }) =>
      isInHome ? "white" : isOpen && isInHome ? "black" : "black"};
    width: 85%;
    height: 2px;
    transition: transform 0.25s ease-in-out;
    -webkit-transition: transform 0.25s ease-in-out;
    -moz-transition: transform 0.25s ease-in-out;
    -ms-transition: transform 0.25s ease-in-out;
    -o-transition: transform 0.25s ease-in-out;
  }

  ::before {
    left: 12%;
    top: 0;
    transform: translate(
        ${({ isOpen }) => (isOpen ? "-2px" : "0")},
        ${({ isOpen }) => (isOpen ? "5px" : "0")}
      )
      rotate(${({ isOpen }) => (isOpen ? "45deg" : "0")});
  }
  ::after {
    left: -12%;
    bottom: 0;
    transform: translate(
        ${({ isOpen }) => (isOpen ? "3px" : "0")},
        ${({ isOpen }) => (isOpen ? "-6px" : "0")}
      )
      rotate(${({ isOpen }) => (isOpen ? "-45deg" : "0")});
  }
`
