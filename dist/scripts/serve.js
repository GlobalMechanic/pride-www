'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _api = require('../api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/******************************************************************************/
// Execute
/******************************************************************************/

_api2.default.run(_path2.default.resolve('config'));