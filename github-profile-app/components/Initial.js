// Initial Component

var React = require('react');
var ReactDOM = require('react-dom');

var Initial = React.createClass({
  render: function() {
    return(
      <div>
        <h1 className="center">Hi Github Dude</h1>
          <label>Enter your github username:  </label>
          <input type="text" onChange={this.props.updateValue} value={this.props.username} /><br/>
          <button type="submit" className="btn btn-success"
            onClick={this.props.handleProfile}>See Profile</button>
          <br/>
      </div>
    );
  }
})

module.exports = Initial;
