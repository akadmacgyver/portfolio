import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import styled from 'styled-components'
import MasterStyle from '../assets/styles/MasterStyle'
import SEO from '../components/SEO'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeAbout from '../components/HomeAbout'

const Home = () => {
  const intl = useIntl()

  const passionList = [
    { text: intl.formatMessage({ id: 'passions.0' }) },
    { text: intl.formatMessage({ id: 'passions.1' }) },
    { text: intl.formatMessage({ id: 'passions.2' }) },
    { text: intl.formatMessage({ id: 'passions.3' }) },
    { text: intl.formatMessage({ id: 'passions.4' }) },
    { text: intl.formatMessage({ id: 'passions.5' }) },
    { text: intl.formatMessage({ id: 'passions.6' }) },
    { text: intl.formatMessage({ id: 'passions.7' }) },
    { text: intl.formatMessage({ id: 'passions.8' }) },
    { text: intl.formatMessage({ id: 'passions.9' }) },
    { text: intl.formatMessage({ id: 'passions.10' }) },
    { text: intl.formatMessage({ id: 'passions.11' }) },
    { text: intl.formatMessage({ id: 'passions.12' }) }
  ]
  return (
    <>
      <SEO
        lang={intl.locale}
        titleSuffix="Portfolio"
        description={intl.formatMessage({ id: 'description' })}
      />
      <MasterStyle>
        <Foreground>
          <Header lang={intl.locale} />
          <HomeAbout passions={passionList} />
          <Footer location="home" />
        </Foreground>
        <Background>
          <iframe
            allowtransparency="false"
            title="Fluid Canvas"
            frameborder="0"
            src="/fluid.html"
          ></iframe>
        </Background>
      </MasterStyle>
    </>
  )
}

export default Home

const Background = styled.main`
  height: 100vh;
  width: 100vw;

  iframe {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
  }
`
const Foreground = styled.div``
