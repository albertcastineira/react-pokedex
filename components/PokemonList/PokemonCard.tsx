import React from 'react';
import Image from "next/image"

export default function PokemonCard({ pokemonName, imageUrl, pokemonId, showPokemon, pokemonTypes }: any) {
  return (
    <div className="pokemonCard shadow-md bg-gradient-to-br from-white to-gray-100 rounded-md p-1 text-center">
      <p className="text-gray-300 font-semibold text-2xl m-1 absolute">
        #{pokemonId}
      </p>
      <p className="text-black">
        {
          pokemonTypes.map((type: any) => <Image className="inline-block ml-2 mt-2 typeIcon" height={20} width={20} src={`typeIcons/${type}.svg`} alt='' />)
        }
      </p>
      <img
        className="pokemonImg w-[150px] m-[auto] drop-shadow-2xl"
        src={imageUrl}
        alt=""
        onClick={() => showPokemon()} // Call showPokemon when the image is clicked
      />
      <p className="font-bold text-gray-600 drop-shadow-lg capitalize text-center my-2">
        {pokemonName}
      </p>
    </div>
  );
}
