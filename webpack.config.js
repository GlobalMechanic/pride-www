const { WebpackConfig } = require('@benzed/dev')

/******************************************************************************/
// Data
/******************************************************************************/

const IS_DEVELOPMENT = process.env.NODE_ENV === 'development'

const port = IS_DEVELOPMENT
  ? require('./config/development.json').port - 100
  : null

/******************************************************************************/
// Production
/******************************************************************************/

const webpackConfig = new WebpackConfig({ port })

/******************************************************************************/
// Development
/******************************************************************************/

if (IS_DEVELOPMENT) {
  const path = require('path')
  const fs = require('fs')

  const BENZED = path.resolve('../benzed-mono')
  const BENZED_BENZED = path.resolve(BENZED, 'node_modules', '@benzed')
  const BENZED_BOOTSTRAP = path.resolve(BENZED, 'bootstrap', 'node_modules')

  webpackConfig.resolve.modules = [ 'node_modules', BENZED_BOOTSTRAP ]

  // Alias Styled Components so the browser doesn't complain about having two instances
  webpackConfig.resolve.alias = {}

  const names = fs.readdirSync(BENZED_BENZED)
  for (const name of names)
    webpackConfig.resolve.alias[`@benzed/${name}`] = path.join(BENZED_BENZED, name)

  webpackConfig.resolve.alias['styled-components'] = path.join(BENZED_BOOTSTRAP, 'styled-components')
}

/******************************************************************************/
// Exports
/******************************************************************************/

module.exports = webpackConfig
