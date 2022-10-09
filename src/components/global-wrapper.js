import React, { Fragment, useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import GlobalStyle from 'styles/global-style'

const GlobalWrapper = (props) => {
  const [displayOutlines, setDisplayOutlines] = useState(false)

  const handleKeyboardInput = (e) => {
    const key = e.keyCode || e.charCode
    // Tab
    if (key === 9) {
      setDisplayOutlines(true)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', (e) => handleKeyboardInput(e))
  })

  return (
    <Fragment>
      <Helmet>
        <html lang="en" />
        <title>Subhasmita Swain</title>
        <meta name="description" content="Subhasmita's projects" />
        <meta
          name="keywords"
          content="keyword1, keyword2, keyword3"
        />
        <meta
          property="og:title"
          content="Subhasmita Swain"
        />
        <meta property="og:description" content="Subhasmita's projects" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://subhasmita.com" />
        <meta property="og:title" content="Subhasmita" />

        
      </Helmet>
      <GlobalStyle displayOutlines={displayOutlines} />
      {props.children}
    </Fragment>
  )
}

export default GlobalWrapper
