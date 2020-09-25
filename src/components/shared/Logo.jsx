import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Logo = () => {
  return (
    <Link to="/">
      <Container data-sal="slide-down" data-sal-easing="ease-out">
        SALA
      </Container>
    </Link>
  )
}

export default Logo

const Container = styled.div`
  height: 100px;
  width: 100px;
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.font.familySans};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  letter-spacing: 2px;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* animation: example 5s infinite;
  animation-direction: alternate;

  @keyframes example {
    0% {
      background-color: black;
    }
    50% {
      background-color: yellow;
    }
    100% {
      background-color: green;
    }
  } */
`
