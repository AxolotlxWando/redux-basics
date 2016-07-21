import AppDispatcher from './AppDispatcher';
import constants from './constants';

var actions = {
  addItem: function(item){
    console.log("creating action object");
    AppDispatcher.handleAction({
      actionType: constants.ADD_ITEM,
      data: item
    });
    console.log("action object delegated to dispatcher");
  },
  removeItem: function(index){
    AppDispatcher.handleAction({
      actionType: constants.REMOVE_ITEM,
      data: index
    })
  }
}

module.exports = actions;

