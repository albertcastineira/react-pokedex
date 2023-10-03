'use client'
import React from 'react'
import Image from 'next/image'
import PokemonList from '../PokemonList/PokemonList'

export default function HomeView() {
  return (
    <div className=''>
      <h1 className='text-center text-3xl text-black font-extrabold m-6 uppercase'>
      <Image
      className='m-auto'
        src="/pokedexLogo.png"
        width={300}
        height={300}
        alt='Pokedex Logo'
        />
      </h1>
      <PokemonList/>
    </div>
  )
}
