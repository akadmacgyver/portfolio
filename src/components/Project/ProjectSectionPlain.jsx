import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { FormattedMessage } from "gatsby-plugin-intl"

const ProjectSectionPlain = ({ headingId, contentId }) => {
  return (
    <Container
    // data-sal="zoom-in" data-sal-easing="ease-out"
    >
      <span>
        <FormattedMessage id={headingId} />
      </span>
      <a>
        <FormattedMessage id={contentId} />
      </a>
    </Container>
  )
}

ProjectSectionPlain.defaultProps = {
  headingId: "",
  contentId: "",
}

ProjectSectionPlain.propTypes = {
  headingId: PropTypes.string,
  contentId: PropTypes.string,
}

export default ProjectSectionPlain

const Container = styled.div`
  margin-top: 100px;
  span {
    font-size: 1.25rem;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    display: block;
    margin-bottom: 10px;
  }
`
