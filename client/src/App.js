import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';

import Main from './components/Main';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowHeight: window.innerHeight
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = (e) => {
    this.setState({ windowHeight: window.innerHeight })
  };

  render() {
    return (
      <div className="App" style={{ minHeight: this.state.windowHeight }}>
        <Main />
      </div>
    );
  }
}

export default App;
