import isObject from 'lodash/lang/isObject';
import invariant from 'invariant';
import { isFSA } from 'flux-standard-action';

/**
 * an elegance way to write reducer
 * @param funcMap the functions map
 * @param initialState initiate state
 * @returns {Function}
 */
export default function(funcMap, initialState) {
	invariant(isObject(funcMap), 'funcMap need to be a plain object')
  return (state = initialState, action = null) =>  {
  	invariant(isFSA(action), `action don't match FSA:\n${action.toString()}`);
  	return funcMap.hasOwnProperty(action.type) ?
	    funcMap[action.type](state, action) :
	    state;
  }
}
