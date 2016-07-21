import React from 'react';

var AddItem = React.createClass({
  getInitialState: function() {
    return {
      value: ''
    };
  },
  _save: function() {
      this.props.add(this.state.value);
      this.setState({
        value: ''
      });
  },
  _onChange: function(event) {
    this.setState({
      value: event.target.value
    });
  },
  _onKeyDown: function(e) {
    if (e.keyCode === 13) {
      this._save();
    }
  },
  render: function() {
    return (
      <div>
        <input type="text" className="form-control" placeholder="New Item"
          onChange={this._onChange}
          onKeyDown={this._onKeyDown}
          value={this.state.value}
        />
      </div>
    )
  }
});

module.exports = AddItem;

