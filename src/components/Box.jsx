import React from "react"
import styled from "styled-components"

const Box = () => {
  return (
    <Container
      data-sal="zoom-in"
      data-sal-delay="300"
      data-sal-easing="ease"
    ></Container>
  )
}

export default Box

const Container = styled.div`
  position: absolute;
  left: 70px;
  top: -190px;
  z-index: -1;
  width: 200px;
  height: 270px;
  background-color: ${({ theme }) => theme.color.yellow};
`
