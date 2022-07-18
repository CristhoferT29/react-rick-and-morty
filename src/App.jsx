import React,{ useEffect, useState } from 'react'
import { Character } from './components/Character'
import { CharacterList } from './components/CharacterList'

export const App = () => {

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    async function fetchData(){
      const response = await fetch("https://rickandmortyapi.com/api/character/")
      const data = await response.json()
      setCharacters(data.results)
    }
    
    fetchData()
  }, [])
  

  return (
    <div className='bg-dark text-white'>
      <h1  className='text-center display-1 py-4'>Rick and Morty</h1>
      <CharacterList />      
    </div>
  )
}
