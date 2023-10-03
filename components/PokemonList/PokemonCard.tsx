import React from 'react'


export default function PokemonCard({pokemonName, imageUrl, pokemonId} : any) {
  return (
    <div className="pokemonCard bg-white rounded-sm p-1 text-center">
        <img className="w-[150px] m-[auto] drop-shadow-2xl" src={imageUrl} alt="" />
        <span className="float-right pr-2 font-semibold text-gray-300 my-2">#{pokemonId}</span>
        <p className="font-bold text-black capitalize text-center my-2">{pokemonName}</p>
    </div>
  )
}

