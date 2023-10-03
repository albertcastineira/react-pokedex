'use client'
import React from 'react'
import PokemonCard from '@/components/PokemonList/PokemonCard'
// TO DO -> UseState for managin pokemos from Api -> For Tomorrow



export default function PokemonList() {

    let apiURL = 'https://pokeapi.co/api/v2/pokemon?limit='
    let maxPokemon = 99;
    interface Pokemon {
        name: string
        
    }

    interface ApiResponse { 
        count : number,
        next : number,
        previous : number,
        results : Array<Pokemon>,
    }

    let pokemons : any

    React.useEffect(() => {
        pokemons =  getPokemons()
      });


      const getPokemons = async (): Promise<ApiResponse> => {
        try {
          const response = await fetch(`${apiURL}${maxPokemon}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          const data = await response.json() as ApiResponse;
          return data;
        } catch (error) {
          // Handle any errors here
          console.error(error);
          throw error; // Rethrow the error so it can be handled by the caller
        }
    }


    return (
        <>
            {pokemons}
            <h2>PokemonList</h2>
            <PokemonCard/>
        </>
        )
}
