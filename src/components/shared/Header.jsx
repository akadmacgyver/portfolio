import React from "react"
import styled from "styled-components"
import Button from "./HeaderButton"

const Header = () => {
  return (
    <Container>
      Wojciech Sala
      <Button />
    </Container>
  )
}

export default Header

const Container = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  font-size: 1.2rem;
`
