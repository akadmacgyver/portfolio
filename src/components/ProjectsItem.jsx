import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { Link } from "gatsby"

const ProjectItem = ({ name, href, img, lang, language }) => {
  return (
    <>
      {lang === language ? (
        <Container
          to={"/projects/" + lang + "/" + href}
          data-sal="zoom-in"
          data-sal-easing="ease-in-out"
        >
          <Image>
            <Img
              fixed={img}
              loading="lazy"
              draggable={false}
              alt={name + "logo"}
            />
          </Image>
          <Name>{name}</Name>
        </Container>
      ) : null}
    </>
  )
}

ProjectItem.defaultProps = {
  name: "",
  href: "",
  img: {},
  lang: "",
  language: "",
}

ProjectItem.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  img: PropTypes.object,
  lang: PropTypes.string,
  language: PropTypes.string,
}

export default ProjectItem

const Container = styled(Link)`
  width: 300px;
  text-align: left;

  @media (min-width: 768px) {
    :nth-child(even) {
      margin-top: 100px;
    }
  }
`
const Image = styled.div`
  height: 485px;
  width: 300px;
  margin-bottom: 20px;
  filter: blur(0);

  -webkit-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
  transition: filter 0.25s ease-in;

  :hover {
    cursor: pointer;
    filter: blur(3px);
  }

  @media (min-width: 364px) {
    padding: 0;
  }
`
const Name = styled.span`
  font-weight: ${({ theme }) => theme.font.weight.medium};
`
