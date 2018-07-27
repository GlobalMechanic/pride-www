import React from 'react'
import styled from 'styled-components'

import { GlobalStyle } from '@benzed/react'

// import Navigation from './navigation'
import Routes from './routes'

import theme from '../theme'

/******************************************************************************/
// Styles
/******************************************************************************/

const WebsiteMain = styled.div`
  display: inherit;
  height: inherit;
`

/******************************************************************************/
// Main
/******************************************************************************/

const Website = ({ children, people }) =>
  <GlobalStyle theme={theme}>
    <WebsiteMain>
      {/* <Navigation /> */}
      <Routes people={people}/>
      {children}
    </WebsiteMain>
  </GlobalStyle>

/******************************************************************************/
// Exports
/******************************************************************************/

export default Website
