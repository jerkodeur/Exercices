import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { counter: 0 }
  }

  // for bind
  changeCountUp = (num) => {
    const newCount = this.state.counter
    this.setState({ counter: newCount + 1 })
  }
  // for bind
  changeCountDown = (num) => {
    const newCount = this.state.counter
    this.setState({ counter: newCount - 1 })
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.counter}</p>
        <button onClick={this.changeCountUp} >Incremente</button>
        <button onClick={this.changeCountDown} >Decremente</button>
      </div >
    )
  }
}

export default App;
