'use client'
import React, { useEffect, useState } from 'react';
import PokemonCard from '@/components/PokemonList/PokemonCard';
import DetailsPokemon from './DetailsPokemon'

// Define the type for a Pokemon object
type Pokemon = {
  id: number;
  name: string;
  img: string;
  abilities: string[]; // Define the type for abilities
  stats: { name: string; base: number }[]; // Define the type for stats
  types: string[]; 
};

<<<<<<< HEAD
type ShowState = {
  show: boolean;
  pokemon: any; // Replace 'any' with the actual type of your Pokemon object
  
};



export default function PokemonList() {
=======
export default function PokemonList(): React.JSX.Element{
>>>>>>> refs/remotes/origin/main
  // Initialize the state with an empty array of Pokemon objects
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [nameSearch, setNameSearch] = useState<string>("");
  const [isLoading,setLoading] = useState<boolean>(true);


  useEffect(() => {
    const getPokemons = async (): Promise<void> => {
      // Recuperamos el listado de pokemones
<<<<<<< HEAD
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=905');
        const pokemonList = await response.json();
        const { results } = pokemonList;
  
        // Mapeamos la primer respuesta, nombre y url
        const newPokemons = await Promise.all(results.map(async (pokemon: any) => {
          try {
            const response = await fetch(pokemon.url);
            if (!response.ok) {
              throw new Error(`Error! status: ${response.status}`);
            }
            const poke = await response.json();
  
            
            if (poke !== null) {
              const abilities = poke.abilities.map((a: any) => a.ability.name);
              const stats = poke.stats.map((s: any) => ({
                name: s.stat.name,
                base: s.base_stat,
              }));
              const types = poke.types.map((t: any) => t.type.name);
  
              return {
                id: poke.id,
                name: poke.name,
                img: poke.sprites.other.home.front_default,
                abilities,
                stats,
                types,
              };
            } else {
              return null;
            }
          } catch (err) {
            console.error('Error fetching Pokemon details:', err);
            return null; 
          }
        }));
        const filteredPokemons = newPokemons.filter(pokemon => pokemon !== null);
        setPokemons(filteredPokemons);
      } catch (err) {
        console.error('Error fetching Pokemon list:', err);
      }
    };
  
=======
      const limit : number = 100000;
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`)
      const pokemonList = await response.json()
      const { results } = pokemonList;
  
      // Mapeamos la primer respuesta, nombre y url
      const newPokemons = results.map(async (pokemon: any) => {
          const response = await fetch(pokemon.url);
          const poke = await response.json();
          return {
            id: poke.id,
            name: poke.name,
            img: poke.sprites.other.home.front_default,
            types: poke.types
          };
      })
      setPokemons(await Promise.all(newPokemons));
      setLoading(false);
    }
    
>>>>>>> refs/remotes/origin/main
    getPokemons();
  }, [isLoading]);


  const [show, setShow] = useState<ShowState>({ show: false, pokemon: {} });

  const showPokemon = (pokemon: any) => setShow({ show: true, pokemon });

  const noShowPokemon = () => setShow({ show: false, pokemon: {} });


  return (
    <>
      <div className="filters grid gap-3 md:grid-cols-3 sm:grid-cols-1 m-4">
        <div className="searchBar md:col-span-2 sm:col-span-1">
          <input className="rounded-md py-2 px-3 outline-none w-full" onChange={e => setNameSearch(e.target.value)} placeholder="Search for pokemons" type="search" />
        </div>
        <div className="filterByTypes">
          <select className="rounded-md py-2 px-3 outline-none w-full h-full" name="typeFilter" id="">
            <option value="All">All types</option>
          </select>
        </div>
      </div>
       <DetailsPokemon {...show} close = {noShowPokemon} />
      <div className='text-center m-4 text-white gap-3 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
        
        {
<<<<<<< HEAD
          pokemons.map(pokemon => (
            <PokemonCard
            pokemonName={pokemon.name}
            imageUrl={pokemon.img}
            pokemonId={pokemon.id}
            showPokemon={() => showPokemon(pokemon)} // Pass the showPokemon function with the current Pokemon
          />
=======
          pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(nameSearch.toLowerCase())).map(pokemon => (
            <PokemonCard
              key = {pokemon.id}
              pokemonId = {pokemon.id}
              pokemonName = {pokemon.name}
              imageUrl = {pokemon.img}
              />
>>>>>>> refs/remotes/origin/main
        ))}
      </div>
    </>
  );
}
