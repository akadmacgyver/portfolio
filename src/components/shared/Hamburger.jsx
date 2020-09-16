import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Hamburger = ({ isOpen, links }) => {
  return <Container isOpen={isOpen}></Container>
}

Hamburger.defaultProps = {
  isOpen: false,
  links: [""],
}

Hamburger.propTypes = {
  isOpen: PropTypes.bool,
  links: PropTypes.arrayOf(PropTypes.string),
}
export default Hamburger

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
