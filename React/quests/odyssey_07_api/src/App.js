import React from 'react';
import './App.css';
import axios from 'axios'
import Quote from './components/Quote'

const firstQuote = {
  "quote": "By chilling my loins I increase the chances of impregnating my wife.",
  "character": "Apu Nahasapeemapetilon",
  "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
}

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { quote: firstQuote }
    //this.getQuotes = this.getQuotes.bind(this)
  }

  getQuotes = () => {
    const url = "https://simpsons-quotes-api.herokuapp.com/quotes"
    axios.get(url)
      .then(response => { return response.data })
      .then(datas => {
        this.setState({ quote: datas[0] })
      })
  }

  render() {
    return (
      <div className="App">
        <Quote quote={this.state.quote} />
        <button type="button" onClick={this.getQuotes}>New quote !</button>
      </div>
    );
  }
}

export default App;
