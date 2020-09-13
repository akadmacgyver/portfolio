import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import MasterStyle from "../assets/styles/MasterStyle"
import SEO from "../components/shared/SEO"

const Home = () => {
  const intl = useIntl()
  return (
    <>
      <SEO lang={intl.locale} />
      <MasterStyle>asdf</MasterStyle>
    </>
  )
}

export default Home
