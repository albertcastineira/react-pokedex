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
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=90&offset=0')
      const pokemonList = await response.json()
      const { results } = pokemonList;

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
    <>
      <div className="filters grid gap-3 md:grid-cols-3 sm:grid-cols-1 m-4">
        <div className="searchBar md:col-span-2 sm:col-span-1">
          <input className="rounded-md py-2 px-3 outline-none w-full" placeholder="Search for pokemons" type="search" />
        </div>
        <div className="filterByTypes">
          <select className="rounded-md py-2 px-3 outline-none w-full h-full" name="typeFilter" id="">
            <option value="All">All types</option>
          </select>
        </div>
      </div>
      <div className='text-center m-4 text-white gap-3 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
        {
          pokemons.map(pokemon => (
            <PokemonCard 
              pokemonName = {pokemon.name}
              imageUrl = {pokemon.img}
              pokemonId = {pokemon.id}
              />
        ))}
      </div>
    </>
  );
}
