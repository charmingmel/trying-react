var React = require('react');
var ReactDOM = require('react-dom');
var Axios = require('axios');

var Profile = require('./../components/Profile');
var Initial = require('./../components/Initial');

// Configs
var token = '7a30417dc5bb6e620c9e56a080cef3946cd0aebd';
var url = 'https://api.github.com';

/*
  App component
 */

var App = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      userData: {},
      profile: false
    };
  },

  updateValue: function(e) {
    e.preventDefault();
    this.setState({username: e.target.value});
  },

  handleProfile: function() {
    Axios.get(url + '/users/' + this.state.username)
      .then(function(result) {
        var data = {
          email: result.data.email,
          following: result.data.following,
          followers: result.data.followers,
          name: result.data.name,
          username: result.data.login,
          repos: result.data.public_repos
        };
        this.setState({
          profile: true,
          userData: data
        });
      }.bind(this))
      .catch(function(err) { console.error('Oops! Error fetching user data:: ' + err); });
  },

  render: function() {
    return (
      <div>
        <Initial username={this.state.username}
          updateValue={this.updateValue}
          handleProfile={this.handleProfile} />

        <Profile showProfile={this.state.profile}
          user={this.state.userData} />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));

