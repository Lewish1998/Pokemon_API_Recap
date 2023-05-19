import React from 'react'

const PokemonDetail = ({ pokemon, onPokemonClick }) => {

   const handleClick = (() => {
     onPokemonClick(pokemon)
   })

  return (
    <>
        <li onClick={handleClick}>{pokemon.name}</li>
    </>
  )
}

export default PokemonDetail
