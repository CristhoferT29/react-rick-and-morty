import React from 'react'

export const Character = ({ character }) => {
  return (
    <div className='text-center p-5'>
      <h3>{character.name}</h3>
      <img src={character.image} className="img-fluid rounded-pill" alt={character.name} />
      <p>{character.origin.name}</p>
    </div>
  )
}
