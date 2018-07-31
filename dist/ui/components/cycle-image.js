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

/******************************************************************************/
// Data
/******************************************************************************/

const IMAGE_KEYS = Array(_constants.CYCLE_IMAGE_COUNT * 2).fill(null).map((_, i) => {

  const portrait = i >= _constants.CYCLE_IMAGE_COUNT;

  const index = portrait ? i - _constants.CYCLE_IMAGE_COUNT : i;

  return { index, portrait };
});

/******************************************************************************/
// Styled Components
/******************************************************************************/

const Image = (0, _styledComponents2.default)(({ src, className }) => {

  const style = src && {
    backgroundImage: `url(${src})`
  };

  return _react2.default.createElement('div', { className: className, style: style });
}).withConfig({
  displayName: 'cycle-image__Image'
})(['background-size:cover;background-position:center;background-repeat:no-repeat;width:100%;height:100%;position:absolute;top:0;z-index:', ';display:flex;font-size:3em;justify-content:center;align-items:center;'], props => props.featured ? 1 : 0);

/******************************************************************************/
// Main Component
/******************************************************************************/

class CycleImage extends _react2.default.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.interval = null, this.urls = [], this.state = {
      src: null,
      portrait: false,
      index: 0
    }, this.loop = () => {
      let index = this.state.index + 1;
      if (index >= _constants.CYCLE_IMAGE_COUNT) index = 0;

      this.setState({ index });
    }, this.resize = () => {
      const portrait = innerHeight > innerWidth;

      if (portrait !== this.state.portrait) this.setState({ portrait });
    }, this.play = () => {
      if (this.interval === null) this.interval = setInterval(this.loop, _constants.CYCLE_SPEED);
    }, this.pause = () => {
      if (this.interval !== null) {
        clearInterval(this.interval);
        this.interval = null;
      }
    }, _temp;
  }

  // State

  // Handlers

  // Init

  getUrls() {
    const { cycle } = this.props;
    this.urls = IMAGE_KEYS.map(({ index, portrait }) => {
      let url = null;
      try {
        const orient = portrait ? 'portrait' : 'landscape';
        url = require(`../../webpack/images/` + `${cycle}-${orient}` + `_${index}.jpg`);
      } catch (err) {
        console.log(err.message);
      }
      return url;
    });
  }

  // LifeCycle

  componentDidMount() {
    (0, _addEventListener.addEventListener)(window, 'resize', this.resize);
    if ((0, _react3.isMobile)()) (0, _addEventListener.addEventListener)(window, 'deviceorientation', this.resize);

    this.getUrls();
    this.resize();
    this.play();
  }

  componentWillUnmount() {
    (0, _addEventListener.removeEventListener)(window, 'resize', this.resize);
    if ((0, _react3.isMobile)()) (0, _addEventListener.removeEventListener)(window, 'deviceorientation', this.resize);
    this.pause();
  }

  componentDidUpdate() {
    const { visibility } = this.props;
    if (!visibility || visibility === 'hidden') this.pause();else this.play();
  }

  render() {

    const { state } = this;
    const { nonSticky } = this.props;

    return _react2.default.createElement(
      _sticky2.default,
      { nonSticky: nonSticky },
      IMAGE_KEYS.map(({ index, portrait }, i) => portrait === state.portrait ? _react2.default.createElement(Image, {
        key: `${index}-${portrait}`,
        src: this.urls[i],
        featured: state.index === index
      }) : null)
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