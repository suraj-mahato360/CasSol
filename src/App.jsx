import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import UseInfo from './components/UseInfo'
import FormContainer from './components/FormContainer'
import Footer from './components/Footer'
import 'remixicon/fonts/remixicon.css'

function App() {

  return (
    <div className="App">
      <Navbar />
      <UseInfo />
      <FormContainer />
      <Footer />
    </div>
  )
}

export default App
