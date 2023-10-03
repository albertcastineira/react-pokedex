import React from 'react'

export default function HomeView() {
  return (
    <div className=''>
      <h1 className='text-center text-3xl text-white font-extrabold'>PokéDex</h1>
      
      <div className="grid grid-cols-4 gap-3">
        <div className="pokemonCard bg-white rounded-sm p-1 text-center">
          <img className="w-[150px] m-auto drop-shadow-2xl" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png" alt="" />
          <p className="font-bold">Bulbasaur <span className="float-right pr-2 font-semibold text-gray-300">#1</span></p>
        </div>
        
      </div>

    </div>
  )
}
