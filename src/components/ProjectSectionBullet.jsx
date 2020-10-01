import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { FormattedMessage } from "gatsby-plugin-intl"

const ProjectSectionBullet = ({ headingId, bullets }) => {
  return (
    <Container
    // data-sal="zoom-in" data-sal-easing="ease-out"
    >
      <span>
        <FormattedMessage id={headingId} />
      </span>
      <Wrapper>
        {bullets.map((item, index) => (
          <div>
            <span>{index + 1}.</span>
            {item}
          </div>
        ))}
      </Wrapper>
    </Container>
  )
}

ProjectSectionBullet.defaultProps = {
  headingId: "",
  bullets: [""],
}

ProjectSectionBullet.propTypes = {
  headingId: PropTypes.string,
  bullets: PropTypes.arrayOf(PropTypes.string),
}

export default ProjectSectionBullet

const Container = styled.div`
  margin-top: 100px;

  span {
    font-size: 1.25rem;
    font-weight: ${({ theme }) => theme.font.weight.medium};
    display: block;
    margin-bottom: 10px;
  }
`
const Wrapper = styled.div`
  width: 100%;

  div {
    margin-bottom: 10px;
  }

  span {
    display: inline-block;
    margin-bottom: 0;
    color: ${({ theme }) => theme.color.grey[500]};
  }
`
