import React from 'react'
import styled from 'styled-components'

import { addEventListener, removeEventListener } from 'add-event-listener'

import { PropTypeSchema, string, required } from '@benzed/schema'
import { isMobile } from '@benzed/react'

import Sticky from './sticky'

/******************************************************************************/
// Styled Components
/******************************************************************************/

const VideoPlayer = styled.video.attrs({
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
    profile: null,
    playable: false
  }

  setPlayable = () =>
    this.setState({ playable: true })

  // Handlers

  resize = async () => {

    const { video } = this.props
    const profile = innerHeight > innerWidth

    const { default: src } = await import(
      `../../webpack/public/assets/${video}-${profile ? 'profile' : 'landscape'}.mp4`
    )

    if (src !== this.state.src)
      this.setState({ src, profile, playable: false })
  }

  getRef = video => {
    this.video = video
  }

  play = () =>
    this.video && this.state.playable && this.video.play()

  pause = () =>
    this.video && this.video.pause()

  // LifeCycle

  componentDidMount () {
    addEventListener(window, 'resize', this.resize)
    if (isMobile())
      addEventListener(window, 'deviceorientation', this.resize)

    this.resize()
    addEventListener(this.video, 'canplay', this.setPlayable)
  }

  componentWillUnmount () {
    removeEventListener(window, 'resize', this.resize)
    if (isMobile())
      removeEventListener(window, 'deviceorientation', this.resize)
    removeEventListener(this.video, 'canplay', this.setPlayable)
  }

  componentDidUpdate () {

    const { visibility } = this.props
    if (!visibility || visibility === 'hidden')
      this.pause()
    else
      this.play()

  }

  render () {

    const { src, profile } = this.state
    const { nonSticky } = this.props

    return <Sticky nonSticky={nonSticky}>
      <VideoPlayer src={src} isProfile={profile} innerRef={this.getRef}/>
    </Sticky>
  }

}

/******************************************************************************/
// Exports
/******************************************************************************/

export default Video
