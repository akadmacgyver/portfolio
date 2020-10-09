import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { FormattedMessage } from "gatsby-plugin-intl"

const ProjectSectionPlain = ({ headingId, content }) => {
  return (
    <Container
    // data-sal="zoom-in" data-sal-easing="ease-out"
    >
      <span>
        <FormattedMessage id={headingId} />
      </span>
      {content}
    </Container>
  )
}

ProjectSectionPlain.defaultProps = {
  headingId: "",
  content: "",
}

ProjectSectionPlain.propTypes = {
  headingId: PropTypes.string,
  content: PropTypes.string,
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
