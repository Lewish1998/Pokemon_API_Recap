import React from 'react'

export default function PokemonList({ allPokemon }) {
  return (
    <div>
      {allPokemon.map(p => (
        <div key={p}>{p}</div>
      ))}
    </div>
  )
}
