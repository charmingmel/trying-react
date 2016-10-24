// Profile Component

var React = require('react');
var ReactDOM = require('react-dom');

var Profile = React.createClass({
  render: function() {
    if (this.props.showProfile) {
      return (
        <div>
          <h3>{this.props.user.name} Github Profile</h3>
          <li className="list-group-item">Username: {this.props.user.username}</li>
          <li className="list-group-item">Email: {this.props.user.email}</li>
          <li className="list-group-item">Followers: {this.props.user.followers}</li>
          <li className="list-group-item">Following: {this.props.user.following}</li>
          <li className="list-group-item">Public Repos: {this.props.user.repos}</li>
        </div>
      );
    } else {
      return (<p>Profile will show here</p>);
    }
  }
})


module.exports = Profile;
