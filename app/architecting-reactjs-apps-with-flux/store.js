import AppDispatcher from './AppDispatcher';
import constants from './constants';

import {EventEmitter} from 'events';

var CHANGE_EVENT = 'change';

var _store = {
  list: []
};


var addItem = function(item){
  _store.list.push(item);
};

var removeItem = function(index){
  _store.list.splice(index, 1);
}


var store = Object.assign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  getList: function(){
    return _store.list;
  },
});


AppDispatcher.register(function(payload){
  console.log("registering the command manager");
  var action = payload.action;
  switch(action.actionType){
    case constants.ADD_ITEM:
      console.log("arriving ADD_ITEM implementation");
      addItem(action.data);
      store.emit(CHANGE_EVENT);
      break;
    case constants.REMOVE_ITEM:
      removeItem(action.data);
      store.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});


module.exports = store;
