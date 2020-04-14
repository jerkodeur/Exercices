import React from 'react';
import DisplayEmployee from './components/DisplayEmployee'
import axios from 'axios';

class App extends React.Component {
  state = {
    employee: null
  }

  getEmployee = () => {
    // Send the request
    axios.get('https://randomuser.me/api?nat=it')
      .then(res => res.data)
      .then(data => {
        this.setState({
          employee: data.results[0]
        });
      });
  }

  componentDidMount = () => this.getEmployee()

  render() {
    return (
      <div className="App">
        {this.state.employee ? (
          <DisplayEmployee employee={this.state.employee} />
        ) : (
            <p>No data yet</p>
          )}
        <button type="button" onClick={this.getEmployee}>Get employee</button>
      </div>
    );
  }
}

export default App;
