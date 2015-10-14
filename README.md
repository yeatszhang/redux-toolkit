# redux-toolkit

supply useful tool functions for redux

## installation

`npm install redux-toolkit`

## Usage

### createReducer

use a hash object to create a redux reducer. Don't need a hug switch block.

```
import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../constants/ActionTypes';

const initialState = [{
  text: 'Use Redux',
  completed: false,
  id: 0
}];

createReducer({
  [ADD_TODO]: (state, { text }) => [{
    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
    completed: false,
    text
  }, ...state],

  [DELETE_TODO]: (state, { id }) => state.filter(todo =>
    todo.id !== action.id
  ),

  [EDIT_TODO]: (state, { id, text }) => state.map(todo =>
    todo.id === id ?
      Object.assign({}, todo, { text }) :
      todo
  ),

  [COMPLETE_ALL]: state => {
    const areAllMarked = state.every(todo => todo.completed);
    return state.map(todo => Object.assign({}, todo, {
      completed: !areAllMarked
    }));
  },

  [CLEAR_COMPLETED]: state => state.filter(todo => todo.completed === false)
}, initialState)
```

### createAction

supply a simple way to write action to save your time and make it esaier to read.

without payload

```
createAction('showAll');

function() {
  return {
    type: 'showAll'
  }
}
```

string payload

```
createAction('add', 'value');

function(value) {
  return {
    type: 'add',
    value: value
  };
}
```

object payload

```
createAction('add', ['num1', 'num2']);

function (num1, num2) {
  return {
    type: 'add',
    payload: {
      num1: num1,
      num2: num2  
    }
  };
}
```

create by a function

```
createAction('add', (num1, num2) => {
  number1: num1,
  number2: num2,
  other: num1 * num2
})

function (num1, num2) {
  var other = num1 * num2;
  return {
    type: 'add',
    payload: {
      number1: num1,
      number2: num2,
      other
    }
  };
}
```
