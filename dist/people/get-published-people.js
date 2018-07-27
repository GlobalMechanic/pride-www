'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _people = require('./people.json');

var _people2 = _interopRequireDefault(_people);

var _immutable = require('@benzed/immutable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/******************************************************************************/
// Data
/******************************************************************************/

const isProduction = process.env.NODE_ENV === 'production';

/******************************************************************************/
// Helper
/******************************************************************************/

const publishToMilliseconds = person => _immutable.set.call(person, 'publish', value => new Date(value).getTime());

const publishedPeopleOnly = person => {

  return isProduction ? person.publish < new Date() : true;
};

const byLastPublished = (a, b) => a.publish > b.publish ? -1 : a.publish < b.publish ? 1 : 0;

/******************************************************************************/
// Main
/******************************************************************************/

function getPublishedPeople() {
  var _context;

  return (_context = _people2.default.map(publishToMilliseconds).filter(publishedPeopleOnly), _immutable.sort).call(_context, byLastPublished);
}

/******************************************************************************/
// Exports
/******************************************************************************/

exports.default = getPublishedPeople;