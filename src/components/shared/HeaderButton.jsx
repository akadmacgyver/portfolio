import React from "react"
import styled from "styled-components"

const HeaderButton = () => {
  return (
    <Container>
      <Inner>
        <div class="first"></div>
        <div></div>
      </Inner>
    </Container>
  )
}

export default HeaderButton

const Container = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
  }
`
const Inner = styled.div`
  width: 24px;
  height: 13px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    width: 85%;
    height: 2px;
    background: black;
    align-self: flex-start;
  }

  .first {
    align-self: flex-end;
  }
`
