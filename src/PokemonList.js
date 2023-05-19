import React from 'react'
import PokemonDetail from './PokemonDetail'

export default function PokemonList({ allPokemon, onPokemonClick }) {

  const pokemonNodes = allPokemon.map((pokemon) => {
    return <PokemonDetail pokemon = {pokemon} onPokemonClick = {onPokemonClick} key={pokemon.name}/>
  })


  return (
    <div>
      <ul>
        {pokemonNodes}
      </ul>
    </div>
  )
}
