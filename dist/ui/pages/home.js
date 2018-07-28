'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _page = require('./page');

var _page2 = _interopRequireDefault(_page);

var _components = require('../components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/******************************************************************************/
// Helper
/******************************************************************************/

const lowerCase = word => word.toLowerCase();

const toDashCase = str => str.split(' ').map(lowerCase).join('-');

/******************************************************************************/
// Main Component
/******************************************************************************/

const Home = (_ref) => {
  let { children, people } = _ref,
      props = _objectWithoutProperties(_ref, ['children', 'people']);

  return _react2.default.createElement(
    _page2.default,
    null,
    _react2.default.createElement(_components.Section, { video: 'intro', nonSticky: people.length === 0 }),
    people.map(person => _react2.default.createElement(_components.Section, {
      key: person.name,
      bio: person.bio,
      video: 'intro' || toDashCase(person.name)
    }))
  );
};

/******************************************************************************/
// Exports
/******************************************************************************/

exports.default = Home;