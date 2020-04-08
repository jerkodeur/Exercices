import React from 'react'
import './QuoteForm.css'

const MAX_LENGTH = 30

class QuoteForm extends React.Component {

  constructor(props) {
    super()
    this.state = { character: '' }
    this.handleChange = this.handleChange.bind(this)
    this.nb_left = MAX_LENGTH
  }
  handleChange(event) {
    const is_ok = event.target.value.length <= MAX_LENGTH
    if (is_ok) this.setState({ character: event.target.value })
    event.target.style.borderColor = is_ok ? "green" : "red"
    this.nb_left = MAX_LENGTH - event.target.value.length
  }

  render() {
    return (
      <form
        className="QuoteForm"
      >
        <label htmlFor="character">Character:</label>
        <input
          value={this.state.character}
          id="character"
          name="character"
          type="text"
          onChange={this.handleChange}
        />
        <p>
          <small>{this.nb_left} remaining characters</small>
        </p>
      </form>
    );
  }
}

export default QuoteForm
