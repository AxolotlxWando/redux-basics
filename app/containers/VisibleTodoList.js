import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

// Helper function
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

/**
 * ## react-redux.connect() explaination
 * The connect function basically abstracted out steps copying/ passing props
 * down on the component tree. The connect method specifically expect the store
 * object to provide the store.state" and store.dispatch items. connect() then
 * summarise states and actions to pass down to the child components.
 *
 * In the process the store is encaptsulated and black boxed so child components
 * no long need to share concerns for that and therefore can stay being
 * conventional react components and stay as stateless as possible.
 */
const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
