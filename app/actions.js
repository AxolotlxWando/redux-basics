
export const EnumVisibilityFilters = {
  SHOW_ALL:        'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE:     'SHOW_ACTIVE'
};

export const EnumActions = {
  ADD_TODO:              'ADD_TODO',
  REMOVE_TODO:           'REMOVE_TODO',
  TOGGLE_TODO:           'TOGGLE_TODO',
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER'
};

export function addTodo(text) {
  return { type: EnumActions.ADD_TODO, text: text };
}

export function toggleTodo(index) {
  return { type: EnumActions.TOGGLE_TODO, index: index };
}

export function setVisibilityFilter(filter) {
  return { type: EnumActions.SET_VISIBILITY_FILTER, filter };
}

