import React, { Component } from 'react';
import Login from './components/Login';
import Welcome from './components/Welcome';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      username: ''
    };
  }

  handleLogin = (username) => {
    this.setState({ isLoggedIn: true, username: username });
  }

  handleLogout = () => {
    this.setState({ isLoggedIn: false, username: '' });
  }

  render() {
    return (
      <div>
        <h1>User Login Signup App</h1>
        <hr />
        {this.state.isLoggedIn ? (
          <Welcome username={this.state.username} onLogout={this.handleLogout} />
        ) : (
          <Login onLogin={this.handleLogin} />
        )}
      </div>
    );
  }
}

export default App;
