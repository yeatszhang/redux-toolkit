import isObject from 'lodash/lang/isObject';

/**
 * an elegance way to write reducer
 * @param funcMap the functions map
 * @param initialState initiate state
 * @returns {Function}
 */
export default function(funcMap, initialState) {
  if (!isObject(funcMap)) {
    throw new Error('funcMap need to be a plain object');
  }

  return (state = initialState, action = null) =>  funcMap.hasOwnProperty(action.type) ?
    funcMap[action.type](state, action) :
    state;
}
