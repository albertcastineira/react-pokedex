import React from 'react'
import { useRouter } from 'next/router'

function pokemonDetails() {
    const router = useRouter();
    const pokemonId = router.query.pokemonId;
    // TODO: Create a similar look likemon details component to fetch pokemon specific data and show it on screen
  return (
    <div>{pokemonId}</div>
  )
}

export default pokemonDetails