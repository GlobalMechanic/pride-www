import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Home, Missing } from '../pages'

/******************************************************************************/
// Main
/******************************************************************************/

const Routes = ({ people }) =>
  <Switch>
    <Route path='/' exact render={ route => <Home people={people} {...route}/>} />
    {/* more routes here */}
    <Route component={Missing} />
  </Switch>

/******************************************************************************/
// Exports
/******************************************************************************/

export default Routes
