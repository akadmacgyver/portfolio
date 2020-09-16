import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const HeaderButton = ({ type, onClick }) => {
  return (
    <Container onClick={onClick}>
      {type === "menu" ? (
        <MenuInner>
          <div class="first"></div>
          <div></div>
        </MenuInner>
      ) : (
        <CloseInner></CloseInner>
      )}
    </Container>
  )
}
HeaderButton.defaultProps = {
  type: "menu" | "close",
}

HeaderButton.propTypes = {
  type: PropTypes.string,
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
const MenuInner = styled.div`
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
// TODO: make animation and fix
const CloseInner = styled.div`
  width: 24px;
  height: 24px;
  display: flex;

  :before,
  :after {
    display: flex;
    content: " ";
    height: 24px;
    width: 2px;
    background-color: black;
  }
  :before {
    transform: rotate(45deg);
  }
  :after {
    transform: rotate(-45deg);
  }
`
