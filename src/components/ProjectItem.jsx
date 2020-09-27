import React from "react"
import styled from "styled-components"
import { FormattedMessage } from "gatsby-plugin-intl"
import PropTypes from "prop-types"

const ProjectItem = ({ name, href, img }) => {
  return (
    <Container
      data-sal="zoom-in"
      data-sal-easing="ease-in-out"
    >
      {/* <Image href={href}></Image> */}
      <Image src={img}></Image>
      <Name>{name}</Name>
    </Container>
  )
}

ProjectItem.defaultProps = {}

ProjectItem.propTypes = {
  name: PropTypes.string,
  href: PropTypes.string,
  img: PropTypes.string
}

export default ProjectItem

const Container = styled.div`
  width: 300px;
  text-align: left;

  @media (min-width: 768px) {
    :nth-child(even) {
      margin-top: 100px;
    }
  }
`

const Image = styled.img`
  height: 485px;
  width: 300px;
  background-color: ${({ theme }) => theme.color.yellow};
  margin-bottom: 20px;

  -webkit-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);

  :hover {
    cursor: pointer;
    /* opacity: 0.8; */
    /* show icons */
  }

  @media (min-width: 364px) {
    padding: 0;
  }
`
const Name = styled.span`
  font-weight: ${({ theme }) => theme.font.weight.medium};
`
