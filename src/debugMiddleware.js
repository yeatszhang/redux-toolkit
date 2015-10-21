import debug from 'debug';
import { isFSA } from 'flux-standard-action';
import invariant from 'invariant';

// 打印触发的action
function logMiddleware({ getState }) {
  return function(next) {
    return function(action) {
      invariant(isFSA(action), `action don't match FSA:\n${action.toString()}`);
      debug('state: old')(getState());
      debug('action')(JSON.stringify(action));
      next(action);
      debug('state: new')(getState());
    };
  };
}

export default logMiddleware;
