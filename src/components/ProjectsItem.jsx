import React from "react"
import styled from "styled-components"
import { FormattedMessage } from "gatsby-plugin-intl"
import PropTypes from "prop-types"

const ProjectItem = ({ name, href, img }) => {
  return (
    <Container
      href={"projects/" + href}
      data-sal="zoom-in"
      data-sal-easing="ease-in-out"
    >
      <Image>
        <span>
          <FormattedMessage id="soon" />
        </span>
      </Image>
      <Name>{name}</Name>
    </Container>
  )
}

ProjectItem.defaultProps = {}

ProjectItem.propTypes = {
  name: PropTypes.string,
  href: PropTypes.string,
  img: PropTypes.string,
}

export default ProjectItem

const Container = styled.a`
  width: 300px;
  text-align: left;

  @media (min-width: 768px) {
    :nth-child(even) {
      margin-top: 100px;
    }
  }
`

const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin: 20px;
    display: block;
    text-align: center;
    font-size: 1.2rem;
  }

  height: 485px;
  width: 300px;
  background-color: ${({ theme }) => theme.color.yellow};
  margin-bottom: 20px;

  -webkit-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);

  :hover {
    cursor: pointer;
  }

  @media (min-width: 364px) {
    padding: 0;
  }
`
const Name = styled.span`
  font-weight: ${({ theme }) => theme.font.weight.medium};
`
