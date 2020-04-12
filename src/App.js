import React, { Component } from 'react';
import './App.css';
import { Redirect } from 'react-router-dom'

class App extends Component {
  state = {
    redirect: false,
  }

  setRedirect = () => {
    this.setState({redirect: true});
  }

  render() {
    if (this.state.redirect)
      return <Redirect to='/portfolio' />
      
    return (
      <div className="App">
        <title>Welcome</title>
        <h1 id="Welcome">Welcome</h1>
        <button title="See Carlos' portfolio" onClick={this.setRedirect}>Portfolio</button>
      </div>
    )
  };
}

export default App;
