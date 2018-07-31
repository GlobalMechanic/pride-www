
const path = require('path')
const fs = require('fs')

/******************************************************************************/
// Data
/******************************************************************************/

const IS_DEVELOPMENT = process.env.NODE_ENV === 'development'
const BENZED = path.resolve('../benzed-mono')
const HAS_BENZED = fs.existsSync(BENZED)

const port = IS_DEVELOPMENT
  ? require('./config/development.json').port - 100
  : null

const { WebpackConfig } = IS_DEVELOPMENT && HAS_BENZED
  ? require('../benzed-mono/packages/dev')
  : require('@benzed/dev')

/******************************************************************************/
// Production
/******************************************************************************/

const webpackConfig = new WebpackConfig({ port })

/******************************************************************************/
// Development
/******************************************************************************/

if (IS_DEVELOPMENT) {

  if (!HAS_BENZED)
    return console.log(
      'benzed-mono repo not found in project folder. @benzed modules will be' +
      'resolved from local node_modules folder.'
    )

  const BENZED_BENZED = path.resolve(BENZED, 'node_modules', '@benzed')
  const BENZED_BOOTSTRAP = path.resolve(BENZED, 'bootstrap', 'node_modules')

  webpackConfig.resolve.modules = [
    'node_modules', BENZED_BOOTSTRAP
  ]

  webpackConfig.resolve.alias = {
    // Alias Styled Components so the browser doesn't complain about having two instances
    'styled-components': path.join(BENZED_BOOTSTRAP, 'styled-components'),

    // Alias ben-zed modules to local benzed modules dev folder
    ...fs
      .readdirSync(BENZED_BENZED)
      .reduce((aliai, name) => {
        aliai[`@benzed/${name}`] = path.join(BENZED_BENZED, name)
        return aliai
      }, {})
  }

}

/******************************************************************************/
// Exports
/******************************************************************************/

module.exports = webpackConfig
