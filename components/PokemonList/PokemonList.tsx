'use client'
import React, { useEffect, useState } from 'react';
import PokemonCard from '@/components/PokemonList/PokemonCard';

// Define the type for a Pokemon object
type Pokemon = {
  id: number;
  name: string;
  img: string;
};

export default function PokemonList() {
  // Initialize the state with an empty array of Pokemon objects
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const getPokemons = async () => {
      // Recuperamos el listado de pokemones
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
      const pokemonList = await response.json()
      const { results } = pokemonList    

      // Mapeamos la primer respuesta, nombre y url
      const newPokemons = results.map(async (pokemon: any) => {
        const response = await fetch(pokemon.url);
        const poke = await response.json()

        return {
          id: poke.id,
          name: poke.name,
          img: poke.sprites.other.home.front_default,
        }
      })  

      // Use Promise.all to wait for all promises to resolve
      setPokemons(await Promise.all(newPokemons));
    }

    getPokemons();
  }, []);

  return (
    <div className='text-center text-white gap-3 m-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
      {
        pokemons.map(pokemon => (
          <PokemonCard 
            pokemonName = {pokemon.name}
            imageUrl = {pokemon.img}
            pokemonId = {pokemon.id}
            />
      ))}
    </div>
  );
}
