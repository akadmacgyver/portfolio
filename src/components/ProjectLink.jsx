import React from "react"
import styled from "styled-components"

const ProjectLink = () => {
  return (
    <Container data-sal="zoom-in" data-sal-easing="ease-in-out"></Container>
  )
}

export default ProjectLink

const Container = styled.a`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  background-color: ${({ theme }) => theme.color.yellow};

  -webkit-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);

  :hover {
    cursor: pointer;
    /* zoom in img */
  }

  @media (min-width: 364px) {
    width: 300px;
    height: 300px;
    padding: 0;
  }

  @media (min-width: 768px) {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 100%;

    :nth-child(even) {
      margin-top: 100px;
    }
  }

  @media (min-width: 1300px) {
    width: 500px;
    height: 500px;
    padding: 0;
  }
`
