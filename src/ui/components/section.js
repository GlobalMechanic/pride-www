import React from 'react'
import styled from 'styled-components'

import Markdown from 'react-markdown'

import Video from './video'
import CycleImage from './cycle-image'

import { isMobile, ScrollVisible, Visible } from '@benzed/react'
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
margin-bottom: 0;
font-size: 1.5em;
padding: ${PAD}em 10vw ${PAD / 10}em 10vw;
color: ${props => props.color || 'inherit'};

background: linear-gradient(
  to bottom,
  transparent,
  ${BLACK} ${PAD}em
)
`

/******************************************************************************/
// Main Component
/******************************************************************************/

const Section = styled(({ video, color, bio, nonSticky, className }) =>
  <ScrollVisible className={className} id={video}>
    <Visible.Context.Consumer>
      { visibility => [
        MOBILE
          ? <CycleImage key='cycle'
            cycle={video}
            nonSticky={nonSticky}
            visibility={visibility}
          />
          : <Video key='video'
            video={video}
            nonSticky={nonSticky}
            visibility={visibility}
          />,
        bio
          ? <Bio key='bio'
            source={bio}
            color={color}
            visibility={visibility}
          />
          : null
      ]}
    </Visible.Context.Consumer>
  </ScrollVisible>)`

flex: 1 0 100vh;

display: flex;

`

/******************************************************************************/
// Exports
/******************************************************************************/

export default Section
