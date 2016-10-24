var React = require('react');
var ReactDOM = require('react-dom');
var Axios = require('axios');

var token = '7a30417dc5bb6e620c9e56a080cef3946cd0aebd';
var url = 'https://api.github.com';

console.log(token);

/*
    Main App component
 */
var App = React.createClass({

  getInitialState: function() {
    return {
      username: '',
      userData: {},
      profile: false
    };
  },

  getRepos: function(name) {
    return Axios.get(url + '/users/' + name + '/repos');
  },

  updateValue: function(e) {
    e.preventDefault();
    this.setState({username: e.target.value});
  },

  getTotalStars: function (repos) {
    return repos.data.reduce(function(prev, current) {
      return prev + current.stargazers_count;
    }, 0);
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


/*
  Initial Component
 */
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


/*
   Profile component
 */
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

ReactDOM.render(<App />, document.getElementById('app'));

