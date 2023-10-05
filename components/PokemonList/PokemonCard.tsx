import React from 'react';
import Image from "next/image"

export default function PokemonCard({ pokemonName, imageUrl, pokemonId, showPokemon, pokemonTypes }: any) {
  return (
    <div className="pokemonCard shadow-md bg-gradient-to-br from-white to-gray-100 rounded-md p-1 text-center">
      <div className="grid grid-cols-2">
        <div className="text-start">
        <p className="text-gray-300 font-semibold text-2xl m-1 absolute">
          #{pokemonId}
        </p>
        </div>
        <div className="text-end mr-2">
        {
            pokemonTypes.map((type: any) => 
              <Image key={pokemonId} className={`inline-block ml-2 mt-2 p-1.5 my-2 rounded-md ${type}`} height={28} width={28} src={`typeIcons/${type}.svg`} alt='' />
            )
        }
        </div>
      </div>
      <Image
        className="pokemonImg m-[auto] drop-shadow-2xl"
        src={imageUrl}
        width={150}
        height={150}
        alt=""
        onClick={() => showPokemon()} // Call showPokemon when the image is clicked
      />
      <p className="font-bold text-gray-600 drop-shadow-lg capitalize text-center my-2">
        {pokemonName}
      </p>
    </div>
  );
}
