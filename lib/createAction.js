'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _lodashLangIsFunction = require('lodash/lang/isFunction');

var _lodashLangIsFunction2 = _interopRequireDefault(_lodashLangIsFunction);

var _lodashLangIsArray = require('lodash/lang/isArray');

var _lodashLangIsArray2 = _interopRequireDefault(_lodashLangIsArray);

exports['default'] = function (type, payload) {
  var actionCreator = null;
  if (payload === undefined) {
    actionCreator = function () {
      return {
        type: type
      };
    };
  } else if (typeof payload === 'string') {
    actionCreator = function (args) {
      return _defineProperty({
        type: type
      }, payload, args[0]);
    };
  } else if ((0, _lodashLangIsArray2['default'])(payload)) {
    actionCreator = function (args) {
      return {
        type: type,
        payload: payload.reduce(function (pre, key, index) {
          pre[key] = args[index];
          return pre;
        }, {})
      };
    };
  } else if ((0, _lodashLangIsFunction2['default'])(payload)) {
    actionCreator = function (args) {
      return _defineProperty({
        type: type
      }, payload, payload.apply(undefined, _toConsumableArray(args)));
    };
  }
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return actionCreator(args);
  };
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95aWNoaXpoYW5nL3dvcmtzcGFjZS9mcm9udEVuZC9yZWFjdC9yZWR1eC10b29sa2l0L3NyYy9jcmVhdGVBY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O29DQUF1Qix3QkFBd0I7Ozs7aUNBQzNCLHFCQUFxQjs7OztxQkFFMUIsVUFBUyxJQUFJLEVBQUUsT0FBTyxFQUFFO0FBQ3JDLE1BQUksYUFBYSxHQUFHLElBQUksQ0FBQztBQUN6QixNQUFJLE9BQU8sS0FBSyxTQUFTLEVBQUU7QUFDekIsaUJBQWEsR0FBRzthQUFPO0FBQ3JCLFlBQUksRUFBSixJQUFJO09BQ0w7S0FBQyxDQUFDO0dBQ0osTUFBTSxJQUFJLE9BQVEsT0FBTyxLQUFLLFFBQVEsRUFBRTtBQUN2QyxpQkFBYSxHQUFHLFVBQUEsSUFBSTs7QUFDbEIsWUFBSSxFQUFKLElBQUk7U0FDSCxPQUFPLEVBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUNsQixDQUFDO0dBQ0osTUFBTSxJQUFJLG9DQUFRLE9BQU8sQ0FBQyxFQUFFO0FBQzNCLGlCQUFhLEdBQUcsVUFBQSxJQUFJO2FBQUs7QUFDdkIsWUFBSSxFQUFKLElBQUk7QUFDSixlQUFPLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFLO0FBQzNDLGFBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdkIsaUJBQU8sR0FBRyxDQUFDO1NBQ1osRUFBRSxFQUFFLENBQUM7T0FDUDtLQUFDLENBQUM7R0FDSixNQUFNLElBQUksdUNBQVcsT0FBTyxDQUFDLEVBQUU7QUFDOUIsaUJBQWEsR0FBRyxVQUFBLElBQUk7O0FBQ2xCLFlBQUksRUFBSixJQUFJO1NBQ0gsT0FBTyxFQUFHLE9BQU8scUNBQUksSUFBSSxFQUFDO0tBQzNCLENBQUM7R0FDSjtBQUNELFNBQU8sWUFBYTtzQ0FBVCxJQUFJO0FBQUosVUFBSTs7O0FBQ2IsV0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDNUIsQ0FBQztDQUNIIiwiZmlsZSI6Ii9Vc2Vycy95aWNoaXpoYW5nL3dvcmtzcGFjZS9mcm9udEVuZC9yZWFjdC9yZWR1eC10b29sa2l0L3NyYy9jcmVhdGVBY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaXNGdW5jdGlvbiBmcm9tICdsb2Rhc2gvbGFuZy9pc0Z1bmN0aW9uJztcbmltcG9ydCBpc0FycmF5IGZyb20gJ2xvZGFzaC9sYW5nL2lzQXJyYXknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih0eXBlLCBwYXlsb2FkKSB7XG4gIGxldCBhY3Rpb25DcmVhdG9yID0gbnVsbDtcbiAgaWYgKHBheWxvYWQgPT09IHVuZGVmaW5lZCkge1xuICAgIGFjdGlvbkNyZWF0b3IgPSAoKSA9PiAoe1xuICAgICAgdHlwZVxuICAgIH0pO1xuICB9IGVsc2UgaWYgKHR5cGVvZiAgcGF5bG9hZCA9PT0gJ3N0cmluZycpIHtcbiAgICBhY3Rpb25DcmVhdG9yID0gYXJncyA9PiAoe1xuICAgICAgdHlwZSxcbiAgICAgIFtwYXlsb2FkXTogYXJnc1swXVxuICAgIH0pO1xuICB9IGVsc2UgaWYgKGlzQXJyYXkocGF5bG9hZCkpIHtcbiAgICBhY3Rpb25DcmVhdG9yID0gYXJncyA9PiAoe1xuICAgICAgdHlwZSxcbiAgICAgIHBheWxvYWQ6IHBheWxvYWQucmVkdWNlKChwcmUsIGtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgcHJlW2tleV0gPSBhcmdzW2luZGV4XTtcbiAgICAgICAgcmV0dXJuIHByZTtcbiAgICAgIH0sIHt9KVxuICAgIH0pO1xuICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24ocGF5bG9hZCkpIHtcbiAgICBhY3Rpb25DcmVhdG9yID0gYXJncyA9PiAoe1xuICAgICAgdHlwZSxcbiAgICAgIFtwYXlsb2FkXTogcGF5bG9hZCguLi5hcmdzKVxuICAgIH0pO1xuICB9XG4gIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgIHJldHVybiBhY3Rpb25DcmVhdG9yKGFyZ3MpO1xuICB9O1xufVxuIl19