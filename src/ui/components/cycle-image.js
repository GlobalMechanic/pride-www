import React from 'react'
import styled from 'styled-components'

import { addEventListener, removeEventListener } from 'add-event-listener'

import { PropTypeSchema, string, required } from '@benzed/schema'
import { isMobile } from '@benzed/react'

import Sticky from './sticky'

import { CYCLE_SPEED, CYCLE_IMAGE_COUNT } from '../constants'

/******************************************************************************/
// Styled Components
/******************************************************************************/

const Image = styled(({ src, className }) => {

  // const style = src && {
  //   backgroundImage: `url(${src})`
  // }

  const style = null

  return <div className={className} style={style}>
    {src}
  </div>
})`

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  width: 100%;
  height: 100%;

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
  index = 0

  // State

  state = {
    src: null,
    profile: false
  }

  loop = async () => {
    this.index++
    if (this.index >= CYCLE_IMAGE_COUNT)
      this.index = 0

    const { cycle } = this.props

    const orient = this.state.profile ? 'profile' : 'landscape'

    // const src = await import(`../../webpack/public/assets/${cycle}_${this.index}.jpg`)
    const src = `../../webpack/public/assets/${cycle}_${orient}_${this.index}.jpg`

    this.setState({ src })

  }

  // Handlers

  resize = () => {

    const profile = innerHeight > innerWidth

    if (profile !== this.state.profile)
      this.setState({ profile })
  }

  // LifeCycle

  componentDidMount () {
    addEventListener(window, 'resize', this.resize)
    if (isMobile())
      addEventListener(window, 'deviceorientation', this.resize)

    this.interval = setInterval(this.loop, CYCLE_SPEED)

    this.resize()

  }

  componentWillUnmount () {
    removeEventListener(window, 'resize', this.resize)
    if (isMobile())
      removeEventListener(window, 'deviceorientation', this.resize)
    clearInterval(this.interval)
  }

  render () {

    const { src } = this.state

    return <Sticky>
      <Image src={src} />
    </Sticky>
  }

}

/******************************************************************************/
// Exports
/******************************************************************************/

export default CycleImage
