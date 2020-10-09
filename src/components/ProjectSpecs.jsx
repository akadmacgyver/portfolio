import React from "react"
import styled from "styled-components"
import { FormattedMessage } from "gatsby-plugin-intl"
import PropTypes from "prop-types"
import { FaBehance, FaGithub, FaGlobeAmericas } from "react-icons/fa"

const ProjectSpecs = ({ title, timeline, role, website, github, behance }) => {
  return (
    <Container>
      <Title data-sal="slide-right" data-sal-easing="ease">
        {title}
      </Title>
      <Wrapper data-sal="slide-left" data-sal-easing="ease">
        <Specs>
          <Heading>
            <FormattedMessage id="proj.timeline" />
          </Heading>
          <Text>{timeline}</Text>
        </Specs>
        <Specs>
          <Heading>
            <FormattedMessage id="proj.role" />
          </Heading>
          <Text>{role}</Text>
        </Specs>
        <Links>
          {website ? (
            <a href={website} target="_blank" rel="noreferrer">
              <FaGlobeAmericas />
            </a>
          ) : null}
          {github ? (
            <a href={github} target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          ) : null}
          {behance ? (
            <a href={behance} target="_blank" rel="noreferrer">
              <FaBehance />
            </a>
          ) : null}
        </Links>
      </Wrapper>
    </Container>
  )
}

ProjectSpecs.defaultProps = {
  title: "",
  timeline: "",
  role: "",
  website: "",
  github: "",
  behance: "",
}

ProjectSpecs.propTypes = {
  title: PropTypes.string,
  timeline: PropTypes.string,
  role: PropTypes.string,
  website: PropTypes.string,
  github: PropTypes.string,
  bahance: PropTypes.string,
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
const Links = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 40px;
  font-size: 1.4rem;

  a {
    margin-left: 20px;
  }
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
