import React, { PropTypes } from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => {
  const propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        completed: React.PropTypes.bool.isRequired,
        text: React.PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
    onTodoClick: React.PropTypes.func.isRequired
  }

  return (
    <ul>
      {todos.map((todo, index) =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
        />
      )}
    </ul>
  )
}

export default TodoList
