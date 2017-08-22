'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = NavLink;

var _set = require('lodash/set');

var _set2 = _interopRequireDefault(_set);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function NavLink(props) {
  var to = props.to,
      rest = _objectWithoutProperties(props, ['to']);

  if (typeof to === 'string') {
    to = { pathname: to };
  }

  (0, _set2.default)(to, 'state.breadcrumb', 'reset');
  return _react2.default.createElement(_reactRouter.Link, _extends({ to: to }, rest));
}

NavLink.propTypes = {
  to: (0, _propTypes.oneOfType)([_propTypes.string, _propTypes.object]).isRequired
};