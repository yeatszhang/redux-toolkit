'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _createAction = require('./createAction');

var _createAction2 = _interopRequireDefault(_createAction);

var _createReducer = require('./createReducer');

var _createReducer2 = _interopRequireDefault(_createReducer);

exports['default'] = { createReducer: _createReducer2['default'], createAction: _createAction2['default'] };
module.exports = exports['default'];