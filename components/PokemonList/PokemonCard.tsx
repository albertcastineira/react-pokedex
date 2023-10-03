import React from 'react'


export default function PokemonCard({pokemonName, imageUrl, pokemonId} : any) {
  return (
    <div className="pokemonCard shadow-md bg-gradient-to-br  from-white to-gray-100 rounded-md p-1 text-center">
        <p className="text-gray-300 font-semibold text-2xl m-1 absolute">#{pokemonId}</p>
        <img className="pokemonImg w-[150px] m-[auto] drop-shadow-2xl" src={imageUrl} alt="" />
        <p className="font-bold text-gray-600 drop-shadow-lg capitalize text-center my-2">{pokemonName}</p>
    </div>
  )
}

