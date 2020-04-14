import React from 'react';
import './App.css';
import axios from 'axios'
import Quote from './components/Quote'

class App extends React.Component {

  state = { quote: null }

  getQuotes = () => {
    axios.get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then(res => {
        this.setState({ quote: res.data[0] })
      })
  }

  componentDidMount = () => this.getQuotes()

  render() {
    return (
      <div className="App" >
        {
          this.state.quote ?
            <Quote quote={this.state.quote} /> : <p>The element is not load again</p>
        }
        < button type="button" onClick={this.getQuotes} > New quote !</button>
      </div >
    );
  }
}

export default App;
