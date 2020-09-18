import React from "react"
import styled from "styled-components"
import { FormattedMessage } from "gatsby-plugin-intl"

const Heading = ({ headingId }) => {
  return (
    <Container data-sal="slide-right" data-sal-easing="ease">
      <FormattedMessage id={headingId} />
    </Container>
  )
}

export default Heading

const Container = styled.div`
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: 3.125rem;
  margin: 100px 0;
`
