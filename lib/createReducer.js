'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodashLangIsObject = require('lodash/lang/isObject');

var _lodashLangIsObject2 = _interopRequireDefault(_lodashLangIsObject);

/**
 * an elegance way to write reducer
 * @param funcMap the functions map
 * @param initialState initiate state
 * @returns {Function}
 */

exports['default'] = function (funcMap, initialState) {
  if (!(0, _lodashLangIsObject2['default'])(funcMap)) {
    throw new Error('funcMap need to be a plain object');
  }

  return function () {
    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
    var action = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
    return funcMap.hasOwnProperty(action.type) ? funcMap[action.type](state, action) : state;
  };
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95aWNoaXpoYW5nL3dvcmtzcGFjZS9mcm9udEVuZC9yZWFjdC9yZWR1eC10b29sa2l0L3NyYy9jcmVhdGVSZWR1Y2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O2tDQUFxQixzQkFBc0I7Ozs7Ozs7Ozs7O3FCQVE1QixVQUFTLE9BQU8sRUFBRSxZQUFZLEVBQUU7QUFDN0MsTUFBSSxDQUFDLHFDQUFTLE9BQU8sQ0FBQyxFQUFFO0FBQ3RCLFVBQU0sSUFBSSxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQztHQUN0RDs7QUFFRCxTQUFPO1FBQUMsS0FBSyx5REFBRyxZQUFZO1FBQUUsTUFBTSx5REFBRyxJQUFJO1dBQU0sT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQ2xGLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUNuQyxLQUFLO0dBQUEsQ0FBQztDQUNUIiwiZmlsZSI6Ii9Vc2Vycy95aWNoaXpoYW5nL3dvcmtzcGFjZS9mcm9udEVuZC9yZWFjdC9yZWR1eC10b29sa2l0L3NyYy9jcmVhdGVSZWR1Y2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGlzT2JqZWN0IGZyb20gJ2xvZGFzaC9sYW5nL2lzT2JqZWN0JztcblxuLyoqXG4gKiBhbiBlbGVnYW5jZSB3YXkgdG8gd3JpdGUgcmVkdWNlclxuICogQHBhcmFtIGZ1bmNNYXAgdGhlIGZ1bmN0aW9ucyBtYXBcbiAqIEBwYXJhbSBpbml0aWFsU3RhdGUgaW5pdGlhdGUgc3RhdGVcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZnVuY01hcCwgaW5pdGlhbFN0YXRlKSB7XG4gIGlmICghaXNPYmplY3QoZnVuY01hcCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2Z1bmNNYXAgbmVlZCB0byBiZSBhIHBsYWluIG9iamVjdCcpO1xuICB9XG5cbiAgcmV0dXJuIChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uID0gbnVsbCkgPT4gIGZ1bmNNYXAuaGFzT3duUHJvcGVydHkoYWN0aW9uLnR5cGUpID9cbiAgICBmdW5jTWFwW2FjdGlvbi50eXBlXShzdGF0ZSwgYWN0aW9uKSA6XG4gICAgc3RhdGU7XG59XG4iXX0=