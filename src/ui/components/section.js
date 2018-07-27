import React from 'react'
import styled from 'styled-components'

import Markdown from 'react-markdown'
import Video from './video'

/******************************************************************************/
// Styled Markdown
/******************************************************************************/

const PAD = '5em'

const BLACK = 'rgba(0, 0, 0, 0.75)'

const Bio = styled(Markdown)`
flex-shrink: 0;
display: flex;
overflow: hidden;
margin-top: calc(80vh - ${PAD});
margin-bottom: calc(80vh - ${PAD});
font-size: 1.5em;
padding: ${PAD};

background: linear-gradient(
  to bottom,
  transparent,
  ${BLACK} ${PAD},
  ${BLACK} calc(100% - ${PAD}),
  transparent
)
`

/******************************************************************************/
// Main Component
/******************************************************************************/

const Section = styled(({ video, bio, className }) =>
  <section className={className}>
    { video
      ? <Video video={video} />
      : null
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
