'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('@benzed/react');

/******************************************************************************/
// Compose
/******************************************************************************/

const theme = _extends({}, _react.themes.basic, {

  bg: new _react.Color(),

  title: 'AbsentGrotesk',
  body: 'AbsentGrotesk'

  /******************************************************************************/
  // Exports
  /******************************************************************************/

});exports.default = theme;