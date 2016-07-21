import { createStore } from 'redux';
import todoApp from './reducers';
import { EnumActions, EnumVisibilityFilters, addTodo, toggleTodo, setVisibilityFilter } from './actions';

let store = createStore(todoApp);

console.log(store.getState());

let unsubscribe = store.subscribe(function(){
  console.log(store.getState())
});

store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(EnumVisibilityFilters.SHOW_COMPLETED))

unsubscribe()

