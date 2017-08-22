'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = undefined;
exports.default = reducer;

var _actionTypes = require('./actionTypes');

var types = _interopRequireWildcard(_actionTypes);

var _push = require('./utils/push');

var _push2 = _interopRequireDefault(_push);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initialState = exports.initialState = { breadcrumbs: [] };

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case types.PUSH:
      {
        return { breadcrumbs: (0, _push2.default)(state, action) };
      }

    case types.RESET:
      {
        return action.payload || initialState;
      }

    default:
      {
        return state;
      }
  }
}