import React from "react"
import styled from "styled-components"
import { FormattedMessage } from "gatsby-plugin-intl"
import PropTypes from "prop-types"

const ProjectSpecs = ({ title, timelineId, role }) => {
  return (
    <Container>
      <Title data-sal="slide-right" data-sal-easing="ease">
        {title}
      </Title>
      <Wrapper data-sal="slide-left" data-sal-easing="ease">
        <Specs>
          <Heading>
            <FormattedMessage id="timeline" />
          </Heading>
          <Text>{/* <FormattedMessage id={timelineId} /> */}</Text>
        </Specs>
        <Specs>
          <Heading>
            <FormattedMessage id="role" />
          </Heading>
          <Text>{role}</Text>
        </Specs>
      </Wrapper>
    </Container>
  )
}

ProjectSpecs.defaultProps = {
  title: "",
  timelineId: "",
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
`
const Heading = styled.span`
  font-weight: ${({ theme }) => theme.font.weight.medium};
  display: block;
`
const Text = styled.span`
  font-size: 0.9rem;
`
