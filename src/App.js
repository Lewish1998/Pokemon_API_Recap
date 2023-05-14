import { useEffect, useState } from "react";
import PokemonList from "./components/PokemonList";

const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon';


export default function App() {

  const [allPokemon, setAllPokemon] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(POKEMON_URL)
    .then(res => res.json())
    .then(data => {
      setAllPokemon(data.results)
      setIsLoading(false);
    })
    .catch((error) => {
      console.log(error.message)
    })
  },[])

  // true if api is loading
  if (isLoading) {
    return <div>Loading...</div>
  }


  

  return (
    <div>
      <h1>Pokemon App</h1>
      <PokemonList allPokemon={allPokemon}/>
    </div>
  );
}
