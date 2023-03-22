import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import UseInfo from './components/UseInfo'
import FormContainer from './components/FormContainer'
import 'remixicon/fonts/remixicon.css'

function App() {

  return (
    <div className="App">
      <Navbar />
      <UseInfo />
      <FormContainer />
    </div>
  )
}

export default App
