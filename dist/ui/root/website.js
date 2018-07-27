'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _react3 = require('@benzed/react');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/******************************************************************************/
// Styles
/******************************************************************************/

// import Navigation from './navigation'
const WebsiteMain = _styledComponents2.default.div.withConfig({
  displayName: 'website__WebsiteMain'
})(['display:inherit;height:inherit;']);

/******************************************************************************/
// Main
/******************************************************************************/

const Website = ({ children, people }) => _react2.default.createElement(
  _react3.GlobalStyle,
  { theme: _theme2.default },
  _react2.default.createElement(
    WebsiteMain,
    null,
    _react2.default.createElement(_routes2.default, { people: people }),
    children
  )
);

/******************************************************************************/
// Exports
/******************************************************************************/

exports.default = Website;