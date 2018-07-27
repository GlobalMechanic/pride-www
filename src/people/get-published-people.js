import people from './people.json'
import { sort, set } from '@benzed/immutable'

/******************************************************************************/
// Data
/******************************************************************************/

const isProduction = process.env.NODE_ENV === 'production'

/******************************************************************************/
// Helper
/******************************************************************************/

const publishToMilliseconds = person =>
  person::set('publish', value => new Date(value).getTime())

const publishedPeopleOnly = person => {

  return isProduction
    ? person.publish < new Date()
    : true
}

const byLastPublished = (a, b) => a.publish > b.publish
  ? -1
  : a.publish < b.publish
    ? 1
    : 0

/******************************************************************************/
// Main
/******************************************************************************/

function getPublishedPeople () {

  return people
    .map(publishToMilliseconds)
    .filter(publishedPeopleOnly)
    ::sort(byLastPublished)

}

/******************************************************************************/
// Exports
/******************************************************************************/

export default getPublishedPeople
