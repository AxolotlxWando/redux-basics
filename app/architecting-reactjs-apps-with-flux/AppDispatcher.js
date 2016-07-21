import {Dispatcher} from 'flux';

var AppDispatcher = new Dispatcher();

AppDispatcher.handleAction = function(action){
  console.log("in dispatcher");
  console.log("dispatching");
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });
};

module.exports = AppDispatcher;

