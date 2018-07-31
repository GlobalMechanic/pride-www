import React from 'react'
import styled from 'styled-components'

import { addEventListener, removeEventListener } from 'add-event-listener'

import { PropTypeSchema, string, required } from '@benzed/schema'
import { isMobile } from '@benzed/react'

import Sticky from './sticky'

import { CYCLE_SPEED, CYCLE_IMAGE_COUNT } from '../constants'

/******************************************************************************/
// Data
/******************************************************************************/

const IMAGE_KEYS = Array(CYCLE_IMAGE_COUNT * 2)
  .fill(null)
  .map((_, i) => {

    const portrait = i >= CYCLE_IMAGE_COUNT

    const index = portrait
      ? i - CYCLE_IMAGE_COUNT
      : i

    return { index, portrait }
  })

/******************************************************************************/
// Styled Components
/******************************************************************************/

const Image = styled(({ src, className }) => {

  const style = src && {
    backgroundImage: `url(${src})`
  }

  return <div className={className} style={style} />
})`

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  z-index: ${props => props.featured ? 1 : 0};

  display: flex;
  font-size: 3em;
  justify-content: center;
  align-items: center;
`

/******************************************************************************/
// Main Component
/******************************************************************************/

class CycleImage extends React.Component {

  static propTypes = new PropTypeSchema({
    cycle: string(required)
  })

  interval = null
  urls = []

  // State

  state = {
    src: null,
    portrait: false,
    index: 0
  }

  loop = () => {
    let index = this.state.index + 1
    if (index >= CYCLE_IMAGE_COUNT)
      index = 0

    this.setState({ index })
  }

  // Handlers

  resize = () => {
    const portrait = innerHeight > innerWidth

    if (portrait !== this.state.portrait)
      this.setState({ portrait })
  }

  play = () => {
    if (this.interval === null)
      this.interval = setInterval(this.loop, CYCLE_SPEED)
  }

  pause = () => {
    if (this.interval !== null) {
      clearInterval(this.interval)
      this.interval = null
    }
  }

  // Init

  getUrls () {
    const { cycle } = this.props
    this.urls = IMAGE_KEYS.map(({ index, portrait }) => {
      let url = null
      try {
        const orient = portrait ? 'portrait' : 'landscape'
        url = require(
          `../../webpack/images/` +
          `${cycle}-${orient}` +
          `_${index}.jpg`
        )
      } catch (err) {
        console.log(err.message)
      }
      return url
    })
  }

  // LifeCycle

  componentDidMount () {
    addEventListener(window, 'resize', this.resize)
    if (isMobile())
      addEventListener(window, 'deviceorientation', this.resize)

    this.getUrls()
    this.resize()
    this.play()
  }

  componentWillUnmount () {
    removeEventListener(window, 'resize', this.resize)
    if (isMobile())
      removeEventListener(window, 'deviceorientation', this.resize)
    this.pause()
  }

  componentDidUpdate () {
    const { visibility } = this.props
    if (!visibility || visibility === 'hidden')
      this.pause()
    else
      this.play()
  }

  render () {

    const { state } = this
    const { nonSticky } = this.props

    return <Sticky nonSticky={nonSticky}>
      { IMAGE_KEYS.map(({ index, portrait }, i) => portrait === state.portrait
        ? <Image
          key={`${index}-${portrait}`}
          src={this.urls[i]}
          featured={state.index === index}
        />
        : null
      )}
    </Sticky>
  }

}

/******************************************************************************/
// Exports
/******************************************************************************/

export default CycleImage
