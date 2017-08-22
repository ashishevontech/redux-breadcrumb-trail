'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ensureHasHome;

var _mapBreadcrumb = require('./mapBreadcrumb');

var _mapBreadcrumb2 = _interopRequireDefault(_mapBreadcrumb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function ensureHasHome() {
  var breadcrumbs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var routes = arguments[1];

  if (breadcrumbs && breadcrumbs.length) return breadcrumbs;

  var first = routes && routes[0];
  return first && [].concat(_toConsumableArray(breadcrumbs), [(0, _mapBreadcrumb2.default)(first)]) || breadcrumbs;
}