'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _addEventListener = require('add-event-listener');

var _schema = require('@benzed/schema');

var _react3 = require('@benzed/react');

var _sticky = require('./sticky');

var _sticky2 = _interopRequireDefault(_sticky);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/******************************************************************************/
// Styled Components
/******************************************************************************/

const VideoPlayer = _styledComponents2.default.video.attrs({
  autoPlay: true,
  loop: true,
  style: props => {

    const key = props.isProfile ? 'width' : 'height';

    return {
      [key]: '100%'
    };
  }
}).withConfig({
  displayName: 'video__VideoPlayer'
})(['position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);']);

/******************************************************************************/
// Main Component
/******************************************************************************/

class Video extends _react2.default.Component {
  constructor(...args) {
    var _temp, _this;

    return _temp = _this = super(...args), this.state = {
      src: null,
      profile: null

      // Handlers

    }, this.resize = _asyncToGenerator(function* () {

      const { video } = _this.props;
      const profile = innerHeight > innerWidth;

      const { default: src } = yield import(`../../webpack/public/assets/${video}-${profile ? 'profile' : 'landscape'}.mp4`);

      if (src !== _this.state.src) _this.setState({ src, profile });
    }), _temp;
  }

  // State

  // LifeCycle

  componentDidMount() {
    (0, _addEventListener.addEventListener)(window, 'resize', this.resize);
    if ((0, _react3.isMobile)()) (0, _addEventListener.addEventListener)(window, 'deviceorientation', this.resize);

    this.resize();
  }

  componentWillUnmount() {
    (0, _addEventListener.removeEventListener)(window, 'resize', this.resize);
    if ((0, _react3.isMobile)()) (0, _addEventListener.removeEventListener)(window, 'deviceorientation', this.resize);
  }

  render() {

    const { src, profile } = this.state;

    return src === null ? null : _react2.default.createElement(
      _sticky2.default,
      null,
      _react2.default.createElement(VideoPlayer, { src: src, isProfile: profile })
    );
  }

}

/******************************************************************************/
// Exports
/******************************************************************************/

Video.propTypes = new _schema.PropTypeSchema({
  video: (0, _schema.string)(_schema.required)
});
exports.default = Video;