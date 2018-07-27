'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/******************************************************************************/
// Styled Components
/******************************************************************************/

const Nav = _styledComponents2.default.nav.withConfig({
  displayName: 'navigation__Nav'
})(['padding:0.5em;a{font-size:0.75em;text-transform:uppercase;text-decoration:none;}a:not(:last-child){margin-right:0.5em;}a.active{text-decoration:underline;}']);

/******************************************************************************/
// Navigation Component Goes Here TODO
/******************************************************************************/

const Navigation = () => _react2.default.createElement(
  Nav,
  null,
  _react2.default.createElement(
    _reactRouterDom.NavLink,
    { to: '/', exact: true },
    'Home'
  ),
  _react2.default.createElement(
    _reactRouterDom.NavLink,
    { to: '/about' },
    'About'
  )
);

/******************************************************************************/
// Exports
/******************************************************************************/

exports.default = Navigation;