import { App } from '@benzed/app'
import * as services from './services'

import Website from '../ui/root/website'
import getPublishedPeople from '../people'

/******************************************************************************/
// App
/******************************************************************************/

class PrideWwwServer extends App {

  services = services

  getClientComponent () {
    return Website
  }

  onSerializeClient () {

    const people = getPublishedPeople()
    return { people }
  }

}

/******************************************************************************/
// Exports
/******************************************************************************/

export default PrideWwwServer
