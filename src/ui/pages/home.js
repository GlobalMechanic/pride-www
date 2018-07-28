import React from 'react'
import Page from './page'
import { Section } from '../components'

/******************************************************************************/
// Helper
/******************************************************************************/

const lowerCase = word => word.toLowerCase()

const toDashCase = str =>
  str.split(' ').map(lowerCase).join('-')

/******************************************************************************/
// Main Component
/******************************************************************************/

const Home = ({ children, people, ...props }) =>
  <Page>
    <Section video='intro' nonSticky={people.length === 0}/>
    {people.map(person => <Section
      key={person.name}
      bio={person.bio}
      video={toDashCase(person.name)}
    />)}
  </Page>

/******************************************************************************/
// Exports
/******************************************************************************/

export default Home
