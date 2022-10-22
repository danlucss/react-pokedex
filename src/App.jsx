import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { SearchBar } from './components/SeachBar'
// import { Pokedex } from './components/Pokedex'

const App = () => {

  const fetchHelloWorld = async () => {
    const response = await fetch('/.netlify/functions/helloWorld')
    const data = await response.json()
    console.log(data)
  }

  const fetchPokedex = async () => {
    const response = await fetch('/.netlify/functions/pokedex')
    const data = await response.json()
    console.log(data)
  }




  return (<>

    <Navbar />
    <SearchBar />
    <button onClick={fetchPokedex}>Fetch Hello World</button>

  </>
  )
}

export default App
