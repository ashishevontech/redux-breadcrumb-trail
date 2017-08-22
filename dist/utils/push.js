'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = push;

var _isEqual = require('lodash/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

var _last = require('lodash/last');

var _last2 = _interopRequireDefault(_last);

var _some = require('lodash/some');

var _some2 = _interopRequireDefault(_some);

var _ensureHasHome = require('./ensureHasHome');

var _ensureHasHome2 = _interopRequireDefault(_ensureHasHome);

var _mapBreadcrumb = require('./mapBreadcrumb');

var _mapBreadcrumb2 = _interopRequireDefault(_mapBreadcrumb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function push(state, _ref) {
  var payload = _ref.payload;

  if (!payload) {
    throw new Error('payload is required');
  }

  var _payload$location = payload.location,
      location = _payload$location === undefined ? {} : _payload$location,
      _payload$params = payload.params,
      params = _payload$params === undefined ? {} : _payload$params,
      routes = payload.routes;

  if (!routes || !routes.length) {
    throw new Error('routes must contain at least one route');
  }

  var action = location.state && location.state.breadcrumb;
  var breadcrumbs = action === 'reset' ? [] : [].concat(_toConsumableArray(state.breadcrumbs));
  breadcrumbs = (0, _ensureHasHome2.default)(breadcrumbs, routes);

  var current = routes.reduce(function (memo, route) {
    return route.useParentBreadcrumb ? memo : route;
  });
  var breadcrumb = (0, _mapBreadcrumb2.default)(current, location, _extends({}, params));

  var matchBreadcrumb = function matchBreadcrumb(other) {
    if (breadcrumb.breadcrumbKey !== other.breadcrumbKey) {
      return false;
    }

    return (0, _isEqual2.default)(breadcrumb.params, other.params);
  };

  if (breadcrumbs.length > 1 && location.action === 'REPLACE') {
    breadcrumbs.pop();
  }

  while ((0, _some2.default)(breadcrumbs, matchBreadcrumb)) {
    breadcrumbs.pop();
  }

  if (breadcrumbs.length > 0) {
    (0, _last2.default)(breadcrumbs).current = false;
  }

  breadcrumbs.push(breadcrumb);
  return breadcrumbs;
}