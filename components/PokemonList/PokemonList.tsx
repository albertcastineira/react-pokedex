"use client";
import React, { useEffect, useState } from "react";
import PokemonCard from "@/components/PokemonList/PokemonCard";
import DetailsPokemon from "./DetailsPokemon";
import Image from "next/image";

// Define the type for a Pokemon object
type Pokemon = {
  id: number;
  name: string;
  img: string;
  abilities: string[]; // Define the type for abilities
  stats: { name: string; base: number }[]; // Define the type for stats
  types: string[];
};

type ShowState = {
  show: boolean;
  pokemon: any; // Replace 'any' with the actual type of your Pokemon object
};

export default function PokemonList() {
  // Initialize the state with an empty array of Pokemon objects
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [nameSearch, setNameSearch] = useState<string>("");
  const [typeFilters, setTypeFilters] = useState<string[]>([
    "normal",
    "fire",
    "water",
    "grass",
    "electric",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psichic",
    "bug",
    "rock",
    "ghost",
    "dragon",
    "dark",
    "steel",
    "fairy",
  ]);

  function addTypeFilter(e: any): void {
    let filterValue: string = e.currentTarget.innerText.toLowerCase();
    let newFilters = [...typeFilters];
    if (typeFilters.includes(filterValue)) {
      e.currentTarget.style.opacity = 0.3;
      newFilters = newFilters.filter(function (e) {
        return e !== filterValue;
      });
    } else {
      e.currentTarget.style.opacity = 1;
      newFilters.push(filterValue);
    }
    setTypeFilters(newFilters);
  }

  useEffect(() => {
    const getPokemons = async (): Promise<void> => {
      // Recuperamos el listado de pokemones
      try {
        const requestLimit: number = 600;
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${requestLimit}`
        );
        const pokemonList = await response.json();
        const { results } = pokemonList;

        // Mapeamos la primer respuesta, nombre y url
        const newPokemons = await Promise.all(
          results.map(async (pokemon: any) => {
            try {
              const response = await fetch(pokemon.url);
              if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
              }
              const poke = await response.json();

              if (poke !== null) {
                const abilities = poke.abilities.map(
                  (a: any) => a.ability.name
                );
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
              console.error("Error fetching Pokemon details:", err);
              return null;
            }
          })
        );
        const filteredPokemons = newPokemons.filter(
          (pokemon) => pokemon !== null
        );
        setPokemons(filteredPokemons);
      } catch (err) {
        console.error("Error fetching Pokemon list:", err);
      }
    };

    getPokemons();
  }, []);

  const [show, setShow] = useState<ShowState>({ show: false, pokemon: {} });

  const showPokemon = (pokemon: any) => setShow({ show: true, pokemon });

  const noShowPokemon = () => setShow({ show: false, pokemon: {} });

  return (
    <>
      <div className="filters grid gap-3 md:grid-cols-3 sm:grid-cols-1 m-4">
        <div className="searchBar md:col-span-1 sm:col-span-3">
          <div className="search">
            <label htmlFor="" className="font-semibold text-white">
              Name Filter
            </label>
            <input
              className="rounded-md py-2 px-3 outline-none w-full mt-2"
              onChange={(e) => setNameSearch(e.target.value)}
              placeholder="Search..."
              type="search"
            />
          </div>
        </div>
        <div className="filterByTypes md:col-span-2 sm:col-span-3 grid grid-cols-6 gap-2">
          <div className="col-span-6">
            <label htmlFor="" className="font-semibold text-white">
              Type Filter
            </label>
          </div>
          <button onClick={(e) => addTypeFilter(e)} className="normal">
            <Image
              src="/typeIcons/normal.svg"
              height={15}
              width={15}
              alt=""
              className="inline-block mr-1 relative -top-[1px]"
            /> 
            Normal
          </button>
          <button onClick={(e) => addTypeFilter(e)} className="fire">
          <Image
              src="/typeIcons/fire.svg"
              height={15}
              width={15}
              alt=""
              className="inline-block mr-1 relative -top-[1px]"
            /> 
            Fire
          </button>
          <button onClick={(e) => addTypeFilter(e)} className="water">
          <Image
              src="/typeIcons/water.svg"
              height={15}
              width={15}
              alt=""
              className="inline-block mr-1 relative -top-[1px]"
            /> 
            Water
          </button>
          <button onClick={(e) => addTypeFilter(e)} className="grass">
          <Image
              src="/typeIcons/grass.svg"
              height={15}
              width={15}
              alt=""
              className="inline-block mr-1 relative -top-[1px]"
            /> 
            Grass
          </button>
          <button onClick={(e) => addTypeFilter(e)} className="electric">
          <Image
              src="/typeIcons/electric.svg"
              height={15}
              width={15}
              alt=""
              className="inline-block mr-1 relative -top-[1px]"
            /> 
            Electric
          </button>
          <button onClick={(e) => addTypeFilter(e)} className="ice">
          <Image
              src="/typeIcons/ice.svg"
              height={15}
              width={15}
              alt=""
              className="inline-block mr-1 relative -top-[1px]"
            /> 
            Ice
          </button>
          <button onClick={(e) => addTypeFilter(e)} className="fighting">
          <Image
              src="/typeIcons/fighting.svg"
              height={15}
              width={15}
              alt=""
              className="inline-block mr-1 relative -top-[1px]"
            /> 
            Fighting
          </button>
          <button onClick={(e) => addTypeFilter(e)} className="poison">
          <Image
              src="/typeIcons/poison.svg"
              height={15}
              width={15}
              alt=""
              className="inline-block mr-1 relative -top-[1px]"
            /> 
            Poison
          </button>
          <button onClick={(e) => addTypeFilter(e)} className="ground">
          <Image
              src="/typeIcons/ground.svg"
              height={15}
              width={15}
              alt=""
              className="inline-block mr-1 relative -top-[1px]"
            /> 
            Ground
          </button>
          <button onClick={(e) => addTypeFilter(e)} className="flying">
          <Image
              src="/typeIcons/flying.svg"
              height={15}
              width={15}
              alt=""
              className="inline-block mr-1 relative -top-[1px]"
            /> 
            Flying
          </button>
          <button onClick={(e) => addTypeFilter(e)} className="psychic">
          <Image
              src="/typeIcons/psychic.svg"
              height={15}
              width={15}
              alt=""
              className="inline-block mr-1 relative -top-[1px]"
            /> 
            Psychic
          </button>
          <button onClick={(e) => addTypeFilter(e)} className="bug">
          <Image
              src="/typeIcons/bug.svg"
              height={15}
              width={15}
              alt=""
              className="inline-block mr-1 relative -top-[1px]"
            /> 
            Bug
          </button>
          <button onClick={(e) => addTypeFilter(e)} className="rock">
          <Image
              src="/typeIcons/rock.svg"
              height={15}
              width={15}
              alt=""
              className="inline-block mr-1 relative -top-[1px]"
            /> 
            Rock
          </button>
          <button onClick={(e) => addTypeFilter(e)} className="ghost">
          <Image
              src="/typeIcons/ghost.svg"
              height={15}
              width={15}
              alt=""
              className="inline-block mr-1 relative -top-[1px]"
            /> 
            Ghost
          </button>
          <button onClick={(e) => addTypeFilter(e)} className="dragon">
          <Image
              src="/typeIcons/dragon.svg"
              height={15}
              width={15}
              alt=""
              className="inline-block mr-1 relative -top-[1px]"
            /> 
            Dragon
          </button>
          <button onClick={(e) => addTypeFilter(e)} className="dark">
          <Image
              src="/typeIcons/dark.svg"
              height={15}
              width={15}
              alt=""
              className="inline-block mr-1 relative -top-[1px]"
            /> 
            Dark
          </button>
          <button onClick={(e) => addTypeFilter(e)} className="steel">
          <Image
              src="/typeIcons/steel.svg"
              height={15}
              width={15}
              alt=""
              className="inline-block mr-1 relative -top-[1px]"
            /> 
            Steel
          </button>
          <button onClick={(e) => addTypeFilter(e)} className="fairy">
          <Image
              src="/typeIcons/fairy.svg"
              height={15}
              width={15}
              alt=""
              className="inline-block mr-1 relative -top-[1px]"
            /> 
            Fairy
          </button>
        </div>
      </div>
      <DetailsPokemon {...show} close={noShowPokemon} />
      <div className="text-center m-4 text-white gap-3 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {pokemons
          .filter(
            (pokemon) =>
              pokemon.types.some((type) => typeFilters.includes(type)) &&
              pokemon.name.toLowerCase().includes(nameSearch.toLowerCase())
          )
          .map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              pokemonName={pokemon.name}
              imageUrl={pokemon.img}
              pokemonId={pokemon.id}
              showPokemon={() => showPokemon(pokemon)} // Pass the showPokemon function with the current Pokemon
            />
          ))}
      </div>
    </>
  );
}
