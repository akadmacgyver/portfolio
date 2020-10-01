import React from "react"
import styled from "styled-components"
import { FormattedMessage } from "gatsby-plugin-intl"
import PropTypes from "prop-types"

const ProjectSpecs = ({ title, timeline, role }) => {
  return (
    <Container
    // data-sal="slide-right" data-sal-easing="ease"
    >
      <Title>{title}</Title>
      <Wrapper>
        <Specs>
          <span>
            <FormattedMessage id="timeline" />
          </span>
          <a>{timeline}</a>
        </Specs>
        <Specs>
          <span>
            <FormattedMessage id="role" />
          </span>
          <a>{role}</a>
        </Specs>
      </Wrapper>
    </Container>
  )
}

ProjectSpecs.defaultProps = {
  title: "",
  timeline: "",
  role: "",
}

ProjectSpecs.propTypes = {
  title: PropTypes.string,
  timeline: PropTypes.string,
  role: PropTypes.string,
}

export default ProjectSpecs

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
const Title = styled.span`
  font-size: 3.125rem;
`
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-content: space-between;
  text-align: right;
`
const Specs = styled.div`
  margin-top: 20px;

  span {
    font-weight: ${({ theme }) => theme.font.weight.medium};
    display: block;
  }

  a {
    font-size: 0.9rem;
  }
`
