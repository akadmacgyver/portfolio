import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import PropTypes from "prop-types"
import styled from "styled-components"
import resumePL from "../../data/resumePLs.pdf"
import resumeEN from "../../data/resumeENs.pdf"

const Resume = ({ lang, isInHamburger }) => {
  const pickResume = () => {
    if (lang === "pl") return resumePL
    else return resumeEN
  }

  return (
    <Container href={pickResume()} target="_blank" rel="noreferrer">
      <FormattedMessage id={isInHamburger ? "resume" : "resumeUpper"} />
    </Container>
  )
}

Resume.defaultProps = {
  lang: "en",
  isInHamburger: false,
}

Resume.propTypes = {
  lang: PropTypes.string,
  isInHamburger: PropTypes.bool,
}

export default Resume

const Container = styled.a``
