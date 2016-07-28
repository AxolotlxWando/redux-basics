export const EnumVisibilityFilters = {
  SHOW_ALL:       'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE:    'SHOW_ACTIVE'
}

export const EnumActions = {
  ADD_TODO:              'ADD_TODO',
  REMOVE_TODO:           'REMOVE_TODO',
  TOGGLE_TODO:           'TOGGLE_TODO',
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER'
}

let nextTodoId = 0
export function addTodo (text) {
  return { type: EnumActions.ADD_TODO, id: nextTodoId++, text: text}
}

export function toggleTodo (id) {
  return { type: EnumActions.TOGGLE_TODO, id: id }
}

export function setVisibilityFilter (filter) {
  return { type: EnumActions.SET_VISIBILITY_FILTER, filter }
}
