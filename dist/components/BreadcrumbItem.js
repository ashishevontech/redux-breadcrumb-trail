'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _reactRouter = require('react-router');

var _componentCache = require('../componentCache');

var _componentCache2 = _interopRequireDefault(_componentCache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BreadcrumbItem = function (_Component) {
  _inherits(BreadcrumbItem, _Component);

  function BreadcrumbItem() {
    _classCallCheck(this, BreadcrumbItem);

    return _possibleConstructorReturn(this, (BreadcrumbItem.__proto__ || Object.getPrototypeOf(BreadcrumbItem)).apply(this, arguments));
  }

  _createClass(BreadcrumbItem, [{
    key: 'render',
    value: function render() {
      var component = this.props.component;
      var _props = this.props,
          current = _props.current,
          itemRenderer = _props.itemRenderer,
          location = _props.location,
          params = _props.params,
          routes = _props.routes,
          url = _props.url;


      if ((typeof component === 'undefined' ? 'undefined' : _typeof(component)) === 'object' && component.componentCacheKey) {
        component = _componentCache2.default.get(component.componentCacheKey);
      }

      if (typeof component === 'function') {
        component = (0, _react.createElement)(component, { current: current, location: location, params: params, routes: routes, url: url });
      }

      var children = current ? component : _react2.default.createElement(
        _reactRouter.Link,
        { to: url },
        component
      );
      return (0, _react.createElement)(itemRenderer, { children: children });
    }
  }]);

  return BreadcrumbItem;
}(_react.Component);

exports.default = BreadcrumbItem;


BreadcrumbItem.propTypes = {
  itemRenderer: (0, _propTypes.oneOfType)([_propTypes.node, _propTypes.func]).isRequired
};