import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import axios from 'axios';
import Pagination from './Pagination';

const API = "https://pokeapi.co/api/v2/pokemon";

const App = () => {

  const [allPokemon, setAllPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(API);
  const [nextPageUrl, setNextPageUrl] = useState();
  const [previousPageUrl, setPreviousPageUrl] = useState();
  const [loading, setLoading] = useState(true)



  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPreviousPageUrl(res.data.previous)
      setAllPokemon(res.data.results.map(p => p.name))
  })

  return () => cancel()
}, [currentPageUrl])

function goToNextPage() {
  setCurrentPageUrl(nextPageUrl)
}

function goToPreviousPage() {
  setCurrentPageUrl(previousPageUrl)
}
  

  if (loading) return "Loading..."

  return (
    <div>
      <PokemonList allPokemon={allPokemon}/>
      <Pagination 
      goToNextPage={nextPageUrl ? goToNextPage : null}
      goToPreviousPage={previousPageUrl ? goToPreviousPage : null}/>
    </div>
  )
}

export default App
