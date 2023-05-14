import PokemonDetail from "./PokemonDetail"

export default function PokemonList({ allPokemon }) {

    const urls = allPokemon.map((pokemon) => {
        return pokemon.url
    })

    

  return (

    allPokemon.map((pokemon) => {
        return <PokemonDetail pokemon={pokemon} urls={urls}/>
    })
    

  )
}
