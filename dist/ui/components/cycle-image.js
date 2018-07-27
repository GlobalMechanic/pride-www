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

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/******************************************************************************/
// Styled Components
/******************************************************************************/

const Image = (0, _styledComponents2.default)(({ src, className }) => {

  // const style = src && {
  //   backgroundImage: `url(${src})`
  // }

  const style = null;

  return _react2.default.createElement(
    'div',
    { className: className, style: style },
    src
  );
}).withConfig({
  displayName: 'cycle-image__Image'
})(['background-size:cover;background-position:center;background-repeat:no-repeat;width:100%;height:100%;display:flex;font-size:3em;justify-content:center;align-items:center;']);

/******************************************************************************/
// Main Component
/******************************************************************************/

class CycleImage extends _react2.default.Component {
  constructor(...args) {
    var _temp, _this;

    return _temp = _this = super(...args), this.interval = null, this.index = 0, this.state = {
      src: null,
      profile: false
    }, this.loop = _asyncToGenerator(function* () {
      _this.index++;
      if (_this.index >= _constants.CYCLE_IMAGE_COUNT) _this.index = 0;

      const { cycle } = _this.props;

      const orient = _this.state.profile ? 'profile' : 'landscape';

      // const src = await import(`../../webpack/public/assets/${cycle}_${this.index}.jpg`)
      const src = `../../webpack/public/assets/${cycle}_${orient}_${_this.index}.jpg`;

      _this.setState({ src });
    }), this.resize = () => {

      const profile = innerHeight > innerWidth;

      if (profile !== this.state.profile) this.setState({ profile });
    }, _temp;
  }

  // State

  // Handlers

  // LifeCycle

  componentDidMount() {
    (0, _addEventListener.addEventListener)(window, 'resize', this.resize);
    if ((0, _react3.isMobile)()) (0, _addEventListener.addEventListener)(window, 'deviceorientation', this.resize);

    this.interval = setInterval(this.loop, _constants.CYCLE_SPEED);

    this.resize();
  }

  componentWillUnmount() {
    (0, _addEventListener.removeEventListener)(window, 'resize', this.resize);
    if ((0, _react3.isMobile)()) (0, _addEventListener.removeEventListener)(window, 'deviceorientation', this.resize);
    clearInterval(this.interval);
  }

  render() {

    const { src } = this.state;

    return _react2.default.createElement(
      _sticky2.default,
      null,
      _react2.default.createElement(Image, { src: src })
    );
  }

}

/******************************************************************************/
// Exports
/******************************************************************************/

CycleImage.propTypes = new _schema.PropTypeSchema({
  cycle: (0, _schema.string)(_schema.required)
});
exports.default = CycleImage;