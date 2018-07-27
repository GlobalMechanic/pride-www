'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/******************************************************************************/
// Main Components
/******************************************************************************/

const Sticky = _styledComponents2.default.div.withConfig({
   displayName: 'sticky__Sticky'
})(['position:sticky;top:0;width:100vw;height:100vh;overflow:hidden;z-index:-1;']);
/******************************************************************************/
// Exports
/******************************************************************************/

exports.default = Sticky;