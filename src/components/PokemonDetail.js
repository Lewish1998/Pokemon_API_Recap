import { useEffect, useState } from "react";


export default function PokemonDetail({ pokemon, urls }) {

    const [test, setTest] = useState();

    useEffect(() => {
        fetch(urls[0])
        .then(res => res.json())
        .then(data => {
          setTest(data.height)
        })
      },[])



    return(
        <div>
            <ul>
                <li>{pokemon.name} </li>
                <li>{pokemon.url}</li>
                <li>Height: {test}</li>
            
            </ul>
        </div>
    )
}