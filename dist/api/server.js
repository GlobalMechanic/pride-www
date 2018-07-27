'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _app = require('@benzed/app');

var _services = require('./services');

var services = _interopRequireWildcard(_services);

var _website = require('../ui/root/website');

var _website2 = _interopRequireDefault(_website);

var _people = require('../people');

var _people2 = _interopRequireDefault(_people);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/******************************************************************************/
// App
/******************************************************************************/

class PrideWwwServer extends _app.App {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.services = services, _temp;
  }

  getClientComponent() {
    return _website2.default;
  }

  onSerializeClient() {

    const people = (0, _people2.default)();
    return { people };
  }

}

/******************************************************************************/
// Exports
/******************************************************************************/

exports.default = PrideWwwServer;