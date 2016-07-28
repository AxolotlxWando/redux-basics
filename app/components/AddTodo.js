import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

/**
 * ## Stateless function syntax explanation
 * Recall plain function without JSX, the virtual dom is rended using the component
 * class and the prop object down from the parent component. e.g.
 *
 *     React.createElement(<component-class>, <state-object>)
 *
 * In the case redux and its top level containers, the state/property object is
 * inplicitly provided by the Provider component. The object parameter below
 * extracts the dispatch method from the store object.
 *
 * Next from this point onwards specific actions will be passed down as in with
 * conventional react approach, the store object, the dispatcher have all been
 * blacked boxed and encapsulated at from this point onwards.
 */
let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={
        (e) => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }
      }>
        <input ref={
          (node) => {
            input = node
          }
        } />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
