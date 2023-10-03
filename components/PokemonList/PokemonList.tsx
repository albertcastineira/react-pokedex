'use client'
import React, { useEffect, useState } from 'react';
import PokemonCard from '@/components/PokemonList/PokemonCard';

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () =>{
      // Recuperamos el listado de pokemones
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
      const listaPokemons = await response.json()
      const { results } = listaPokemons

      setPokemons(results);

      // Mapeamos la primer respuesta, nombre y url
      const pokemons = results.map( async (pokemon : any) => {
        const response = await fetch(pokemon.url);
        const poke = await response.json()

        console.log(poke)
      })
    }

    getPokemons()
  }, [])

  return (
    <div className='text-center text-white m-4'>
      {pokemons.map(pokemon => (
    <p m-4>{pokemon.name}</p>
))}
    </div>
  );
}

