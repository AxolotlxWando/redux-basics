import React from 'react'
import Footer from './Footer'
import AddTodo from './AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

/**
 * Root component
 * ==============
 * ## Component type explaination
 * This is the root component, each child branches has a containers
 * components taken care of retreiving states from the store down the dom
 * tree. Therefore there is no props are being passed down from here at al
 *
 * ## JSX component/ render syntax explaination
 * In stateless function syntax, a component definition is a plain function that
 * omit states, getDefaultProps, propTypes and just return a JSX dom clause.
 * This is differrent to the createClass method or by extending the
 * React.Component that the stateless function syntax does not maintain internal
 * states or backing instances. ReactDOM.render function support all of these
 * three kind of objects. The recursive resolution will build the component tree
 * disregarding the type of object and syntax used.
 *
 * The purpose of this syntax is to encourage separation of stateless components
 * and stateful container components. Complete reference, see [this](https://facebook.github.io/react/docs/reusable-components.html#stateless-functions).
 */
const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
