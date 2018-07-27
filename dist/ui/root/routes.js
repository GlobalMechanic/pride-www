'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _pages = require('../pages');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/******************************************************************************/
// Main
/******************************************************************************/

const Routes = ({ people }) => _react2.default.createElement(
  _reactRouterDom.Switch,
  null,
  _react2.default.createElement(_reactRouterDom.Route, { path: '/', exact: true, render: route => _react2.default.createElement(_pages.Home, _extends({ people: people }, route)) }),
  _react2.default.createElement(_reactRouterDom.Route, { component: _pages.Missing })
);

/******************************************************************************/
// Exports
/******************************************************************************/

exports.default = Routes;