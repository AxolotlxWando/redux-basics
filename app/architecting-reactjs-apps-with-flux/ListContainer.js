import React from 'react';

/* Components */
import List from './List';
import AddItem from './AddItem';

/* Stores and actions */
import store from './store';
import actions from './actions';

var ListContainer = React.createClass({
  getInitialState: function(){
    return ({
      list: store.getList()
    });
  },
  /* Linking update funtion with the store's update hook */
  componentDidMount: function(){
    store.addChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
    store.removeChangeListener(this._onChange);
  },
  /* Defining Actions (available to self and selected children to invoke as needed) *
  
   * Various components/ objects exist in this system:                              *
   * - The dispatcher/ store maintain the central execution flow                    *
   *   The pattern is called observer pattern (the iconic javascript event systems) *
   *                                                                                *
   *   What's different/ special about flux is that it implements the command       *
   *   pattern to centralise all manipulation on data too.                          *
   *                                                                                *
   * - Action objects, in this setup, does not perform real actions, real actions   *
   *   are handled by the store                                                     */
  handleAddItem: function(newItem){
    actions.addItem(newItem);
  },
  handleRemoveItem: function(index){
    actions.removeItem(index);
  },
  _onChange: function(){
    this.setState({
      list: store.getList()
    })
  },
  render: function(){
    return (
      <div className="col-sm-6 col-md-offset-3">
        <div className="col-sm-12">
          <h3 className="text-center"> Todo List </h3>
          <AddItem add={this.handleAddItem} />
          <List items={this.state.list} remove={this.handleRemoveItem} />
        </div>
      </div>
    )
  }
});

module.exports = ListContainer;

