import React from 'react'
import styled from 'styled-components'

import { addEventListener, removeEventListener } from 'add-event-listener'

import { PropTypeSchema, string, required } from '@benzed/schema'

/******************************************************************************/
// Styled Components
/******************************************************************************/

const Sticky = styled.div`
   position: sticky;
   top: 0;
   width: 100vw;
   height: 100vh;
   overflow: hidden;
   z-index: -1;
`

const Player = styled.video.attrs({
  autoPlay: true,
  loop: true,
  style: props => {

    const key = props.isProfile ? 'width' : 'height'

    return {
      [key]: '100%'
    }
  }
})`

  /* Center the video */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`

/******************************************************************************/
// Main Component
/******************************************************************************/

class Video extends React.Component {

  static propTypes = new PropTypeSchema({
    video: string(required)
  })

  // State

  state = {
    src: null,
    profile: null
  }

  // Handlers

  resize = async () => {

    const { video } = this.props
    const profile = innerHeight > innerWidth

    const { default: src } = await import(
      `../../webpack/public/assets/${video}-${profile ? 'profile' : 'landscape'}.mp4`
    )

    if (src !== this.state.src)
      this.setState({ src, profile })
  }

  // LifeCycle

  componentDidMount () {
    addEventListener(window, 'resize', this.resize)
    addEventListener(window, 'deviceorientation', this.resize)
    this.resize()
  }

  componentWillUnmount () {
    removeEventListener(window, 'resize', this.resize)
    removeEventListener(window, 'deviceorientation', this.resize)
  }

  render () {

    const { src, profile } = this.state

    return src === null
      ? null
      : <Sticky>
        <Player src={src} isProfile={profile}/>
      </Sticky>
  }

}

/******************************************************************************/
// Exports
/******************************************************************************/

export default Video
