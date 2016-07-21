import { combineReducers } from 'redux';
import { EnumActions, EnumVisibilityFilters } from './actions';

function visibilityFilter(state = EnumVisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case EnumActions.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function todos(state = [], action) {
  switch (action.type){
    case EnumActions.ADD_TODO:
      state = state.slice();
      state.push({
          text: action.text,
          completed: false
      });
      return state;
    case EnumActions.TOGGLE_TODO:
      return state.map(function(todo, index) {
          if (index === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            });
          }
          return todo;
      });
    default:
      return state;
  }
}

const todoApp = combineReducers({
    visibilityFilter: visibilityFilter,
    todos: todos
});

export default todoApp;

