import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { SearchBar } from './components/SeachBar'
// import { Pokedex } from './components/Pokedex'

const App = () => {

  const onSearchHandler = async (search) => {
    console.log("search: ", search)

    const searchPokemon = await fetch('/.netlify/functions/pokemon', {
      method: 'POST',
      body: JSON.stringify(search)
    })

    const pokemon = await searchPokemon.json()
    console.log("pokemon: ", pokemon)


  }


  return (<>

    <Navbar />
    <SearchBar onSearch={onSearchHandler} />


  </>
  )
}

export default App
