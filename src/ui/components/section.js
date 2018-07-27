import React from 'react'
import styled from 'styled-components'

import Markdown from 'react-markdown'

import Video from './video'
import CycleImage from './cycle-image'

import { isMobile } from '@benzed/react'
import { TEST_MOBILE } from '../constants'

/******************************************************************************/
// Data
/******************************************************************************/

const MOBILE = TEST_MOBILE || isMobile()

/******************************************************************************/
// Styled Markdown
/******************************************************************************/

const PAD = 40

const BLACK = 'rgba(0, 0, 0, 0.675)'

const Bio = styled(Markdown)`
flex-shrink: 0;
box-sizing: border-box;
display: flex;
overflow: hidden;
margin-top: calc(80vh - ${PAD}em);
margin-bottom: calc(80vh - ${PAD}em);
font-size: 1.5em;
padding: ${PAD}em 10vw ${PAD}em 10vw;

background: linear-gradient(
  to bottom,
  transparent,
  ${BLACK} ${PAD}em,
  ${BLACK} calc(100% - ${PAD}em),
  transparent
)
`

/******************************************************************************/
// Main Component
/******************************************************************************/

const Section = styled(({ video, bio, className }) =>
  <section className={className}>
    { MOBILE
      ? <CycleImage cycle={video} />
      : <Video video={video} />
    }
    { bio
      ? <Bio source={bio} />
      : null
    }
  </section>)`

flex: 1 0 100vh;

display: flex;

:last-child {
  ${Bio} {
    margin-bottom: 0;
  }
}

`

/******************************************************************************/
// Exports
/******************************************************************************/

export default Section
