'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.separatorRenderer = exports.Breadcrumbs = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.mapStateToProps = mapStateToProps;

var _isMatch = require('lodash/isMatch');

var _isMatch2 = _interopRequireDefault(_isMatch);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _reactRedux = require('react-redux');

var _BreadcrumbItem = require('./BreadcrumbItem');

var _BreadcrumbItem2 = _interopRequireDefault(_BreadcrumbItem);

var _actionCreators = require('../actionCreators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Breadcrumbs = exports.Breadcrumbs = function (_Component) {
  _inherits(Breadcrumbs, _Component);

  function Breadcrumbs(props) {
    _classCallCheck(this, Breadcrumbs);

    var _this = _possibleConstructorReturn(this, (Breadcrumbs.__proto__ || Object.getPrototypeOf(Breadcrumbs)).call(this, props));

    _this.state = { previousLocation: null };
    _this.refreshBreadcrumb = _this.refreshBreadcrumb.bind(_this);
    _this.renderComponents = _this.renderComponents.bind(_this);
    return _this;
  }

  _createClass(Breadcrumbs, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.refreshBreadcrumb(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.refreshBreadcrumb(nextProps);
    }
  }, {
    key: 'refreshBreadcrumb',
    value: function refreshBreadcrumb(props) {
      var dispatch = props.dispatch,
          routes = props.routes,
          params = props.params,
          location = props.location;


      if (!(0, _isMatch2.default)(this.state.previousLocation, location)) {
        dispatch((0, _actionCreators.push)({ location: location, params: params, routes: routes }));
        this.setState({ previousLocation: location });
      }
    }
  }, {
    key: 'renderComponents',
    value: function renderComponents() {
      var _props = this.props,
          breadcrumbs = _props.breadcrumb.breadcrumbs,
          itemRenderer = _props.itemRenderer,
          separatorRenderer = _props.separatorRenderer,
          location = _props.location,
          routes = _props.routes;


      return breadcrumbs.reduce(function (memo, el, i, arr) {
        var component = _react2.default.createElement(_BreadcrumbItem2.default, _extends({
          key: el.url
        }, el, {
          itemRenderer: itemRenderer,
          location: location,
          routes: routes
        }));

        memo.push(component);
        if (i < arr.length - 1) {
          if (typeof separatorRenderer === 'function') {
            memo.push((0, _react.createElement)(separatorRenderer, { key: i }));
          } else {
            memo.push(separatorRenderer);
          }
        }

        return memo;
      }, []);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          breadcrumbs = _props2.breadcrumb.breadcrumbs,
          listRenderer = _props2.listRenderer,
          dispatch = _props2.dispatch,
          itemRenderer = _props2.itemRenderer,
          separatorRenderer = _props2.separatorRenderer,
          location = _props2.location,
          params = _props2.params,
          routes = _props2.routes,
          rest = _objectWithoutProperties(_props2, ['breadcrumb', 'listRenderer', 'dispatch', 'itemRenderer', 'separatorRenderer', 'location', 'params', 'routes']);

      return breadcrumbs.length > 1 && (0, _react.createElement)(listRenderer, _extends({}, rest, { children: this.renderComponents() }));
    }
  }]);

  return Breadcrumbs;
}(_react.Component);

var renderer = (0, _propTypes.oneOfType)([_propTypes.node, _propTypes.func]);
Breadcrumbs.propTypes = {
  breadcrumb: (0, _propTypes.shape)({
    breadcrumbs: _propTypes.array
  }).isRequired,
  itemRenderer: renderer.isRequired,
  listRenderer: renderer.isRequired,
  separatorRenderer: renderer.isRequired
};

var separatorRenderer = exports.separatorRenderer = function separatorRenderer() {
  return _react2.default.createElement(
    'li',
    null,
    '>'
  );
};

Breadcrumbs.defaultProps = {
  itemRenderer: 'li',
  listRenderer: 'ul',
  separatorRenderer: separatorRenderer
};

function mapStateToProps(_ref) {
  var breadcrumb = _ref.breadcrumb;

  return { breadcrumb: breadcrumb };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Breadcrumbs);