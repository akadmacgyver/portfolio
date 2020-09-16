import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import MasterStyle from "../assets/styles/MasterStyle"
import SEO from "../components/shared/SEO"

import Header from "../components/shared/Header"
import Footer from "../components/shared/Footer"

const Home = () => {
  const intl = useIntl()
  return (
    <>
      <SEO
        lang={intl.locale}
        description={intl.formatMessage({ id: "description" })}
      />
      <MasterStyle>
        <Header />
        <Footer />
      </MasterStyle>
    </>
  )
}

export default Home
