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
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  useEffect(() => {
    setLoading(true)
    let cancel
    const source = axios.CancelToken.source();

    axios.get(currentPageUrl, {
      cancelToken: source.token
    }).then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPreviousPageUrl(res.data.previous)
      setAllPokemon(res.data.results.map(p => p))
  }).catch(error => {
    if (!axios.isCancel(error)){
      Error.log(error)
    }
  });

  return () => {
    if (cancel) {
      cancel();
    }
    source.cancel();
  };
}, [currentPageUrl])


if (loading) return "Loading..."


function goToNextPage() {setCurrentPageUrl(nextPageUrl)}

function goToPreviousPage() {setCurrentPageUrl(previousPageUrl)}

function onPokemonClick(e){setSelectedPokemon(e)} 
  






  return (
    <div>
      <PokemonList allPokemon={allPokemon} onPokemonClick={onPokemonClick}/>
      <h4>Selected Pokemon</h4>
      {selectedPokemon ? selectedPokemon.name : ""}
      <Pagination 
      goToNextPage={nextPageUrl ? goToNextPage : null}
      goToPreviousPage={previousPageUrl ? goToPreviousPage : null}/>
    </div>
  )
}

export default App
