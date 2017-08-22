'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

function isPrimitive(val) {
  return typeof val !== 'function' && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) !== 'object';
}

var cache = {};
exports.default = {
  get: function get(key) {
    return cache[key];
  },
  set: function set(key, value) {
    if (!key || !isPrimitive(key)) {
      throw new Error('Key must be a primitive: ' + key);
    }

    if (typeof value !== 'function' && !(0, _react.isValidElement)(value)) {
      throw new Error('Value must be a valid react element: ' + value);
    }

    cache[key] = value;
  }
};