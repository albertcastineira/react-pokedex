import React from 'react'


export default function PokemonCard({pokemonName, imageUrl, pokemonId} : any) {
  return (
    <div className="pokemonCard bg-white rounded-md p-1 text-center">
        <p className="text-gray-300 font-semibold text-2xl m-1 absolute">#{pokemonId}</p>
        <img className="w-[150px] m-[auto] drop-shadow-2xl" src={imageUrl} alt="" />
        <p className="font-bold text-black capitalize text-center my-2">{pokemonName}</p>
    </div>
  )
}

