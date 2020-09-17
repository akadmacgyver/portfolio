import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const HeaderButton = ({ isOpen, onClick }) => {
  return (
    <Container onClick={onClick}>
      <MenuInner isOpen={isOpen}></MenuInner>
    </Container>
  )
}
HeaderButton.defaultProps = {
  isOpen: false,
}

HeaderButton.propTypes = {
  isOpen: PropTypes.bool,
}

export default HeaderButton

const Container = styled.button`
  border: none;
  background: none;
  z-index: 999;
  width: 32px;
  height: 32px;

  :hover {
    cursor: pointer;
  }
`
const MenuInner = styled.div`
  width: 24px;
  height: 13px;
  position: relative;
  /* background: ${({ isOpen }) => (isOpen ? "#000" : "#ffff00")}; */

  ::before,
  ::after {
    content: "";
    position: absolute;
    width: 85%;
    height: 2px;
    background: black;
    transition: transform 0.25s ease-in-out;
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
