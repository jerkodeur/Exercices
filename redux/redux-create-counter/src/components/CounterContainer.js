import React from 'react'
import { connect } from 'react-redux'

import './CounterContainer.css'

const CounterContainer = (props) => {
  const { counter, dispatch } = props
  return (
    <div className="counter-container">
      <p>{counter}</p>
      <button onClick={() => dispatch({ type: 'LESSTEN' })}>--</button>
      <button onClick={() => dispatch({ type: 'LESSONE' })}>-</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>reset</button>
      <button onClick={() => dispatch({ type: 'MOREONE' })}>+</button>
      <button onClick={() => dispatch({ type: 'MORETEN' })}>++</button>
    </div>
  )
}

const mapStateToProps = state => ({
  counter: state
})

export default connect(mapStateToProps)(CounterContainer)