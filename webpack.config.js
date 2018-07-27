const { WebpackConfig } = require('@benzed/dev')

const port = require('./config/development.json').port - 100

/******************************************************************************/
// Production
/******************************************************************************/

const webpackConfig = new WebpackConfig({ port })

/******************************************************************************/
// Exports
/******************************************************************************/

module.exports = webpackConfig
