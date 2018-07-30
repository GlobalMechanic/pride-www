'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactMarkdown = require('react-markdown');

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

var _video = require('./video');

var _video2 = _interopRequireDefault(_video);

var _cycleImage = require('./cycle-image');

var _cycleImage2 = _interopRequireDefault(_cycleImage);

var _react3 = require('@benzed/react');

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/******************************************************************************/
// Data
/******************************************************************************/

const MOBILE = _constants.TEST_MOBILE || (0, _react3.isMobile)();

/******************************************************************************/
// Styled Markdown
/******************************************************************************/

const PAD = 40;

const BLACK = 'rgba(0, 0, 0, 0.675)';

const Bio = (0, _styledComponents2.default)(_reactMarkdown2.default).withConfig({
  displayName: 'section__Bio'
})(['flex-shrink:0;box-sizing:border-box;display:flex;overflow:hidden;margin-top:calc(80vh - ', 'em);margin-bottom:0;font-size:1.5em;padding:', 'em 10vw ', 'em 10vw;color:', ';background:linear-gradient( to bottom,transparent,', ' ', 'em,', ' calc(100% - ', 'em),transparent )'], PAD, PAD, PAD / 4, props => props.color || 'inherit', BLACK, PAD, BLACK, PAD / 4);

/******************************************************************************/
// Main Component
/******************************************************************************/

const Section = (0, _styledComponents2.default)(({ video, color, bio, nonSticky, className }) => _react2.default.createElement(
  _react3.ScrollVisible,
  { className: className, id: video },
  _react2.default.createElement(
    _react3.Visible.Context.Consumer,
    null,
    visibility => [MOBILE ? _react2.default.createElement(_cycleImage2.default, { key: 'cycle',
      cycle: video,
      nonSticky: nonSticky,
      visibility: visibility
    }) : _react2.default.createElement(_video2.default, { key: 'video',
      video: video,
      nonSticky: nonSticky,
      visibility: visibility
    }), bio ? _react2.default.createElement(Bio, { key: 'bio',
      source: bio,
      color: color,
      visibility: visibility
    }) : null]
  )
)).withConfig({
  displayName: 'section__Section'
})(['flex:1 0 100vh;display:flex;']);

/******************************************************************************/
// Exports
/******************************************************************************/

exports.default = Section;