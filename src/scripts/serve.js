import path from 'path'

/******************************************************************************/
// Setup Dev
/******************************************************************************/

if (process.env.NODE_ENV === 'development') {
  const { addAlias } = require('module-alias')
  const BENZED = path.resolve('../benzed-mono/packages')

  addAlias('@benzed', BENZED)
}

/******************************************************************************/
// Execute
/******************************************************************************/

require('../api')
  .default
  .run(path.resolve('config'))
