import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { FormattedMessage } from "gatsby-plugin-intl"

const ProjectNext = ({ img, href }) => {
  return (
    <Container>
      <a href={href} alt="">
        <FormattedMessage id="nextProj" />
      </a>
      <img></img>
    </Container>
  )
}

ProjectNext.defaultProps = {
  img: "",
  href: "",
}

ProjectNext.propTypes = {
  img: PropTypes.string,
  href: PropTypes.string,
}

export default ProjectNext

const Container = styled.div`
  width: 100%;

  a {
    font-weight: ${({ theme }) => theme.font.weight.medium};
    color: ${({ theme }) => theme.color.white};
  }
`
