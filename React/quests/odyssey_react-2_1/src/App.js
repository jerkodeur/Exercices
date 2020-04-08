import React from 'react'
import QuoteForm from './components/QuoteForm'
import QuoteList from './components/QuoteList'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <QuoteForm />
      <QuoteList />
    </div>
  );
}

export default App;
