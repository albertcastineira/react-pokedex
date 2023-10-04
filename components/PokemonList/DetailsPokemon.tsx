import React from 'react'

export default function DetailsPokemon({show, pokemon, close} : any) {
  return (
    <>
    <div className='modal-container' onClick={close} style={{display: show ? 'grid' : 'none'}}>
        <section className="modal-body">
        <div className="imagen-container">
            <img src={pokemon.img} alt={pokemon.nombre} className='imagen-detalle' />
        <section>
        {pokemon.types?.map((type : any) => <span className='tag'>{type}</span>)}
        </section>
        </div>
        <div className="data">
            <h2 className='titulo'>{pokemon.nombre} {pokemon.id}</h2>
            <h3 className='titulo-seccion'>Habilidades</h3>
            {pokemon.abilities?.map((ability : any) =>  <span className='tag'>{ability}</span>)}
            <h3 className='titulo-seccion'>Estadisticas</h3>
            <div className="stats">
                {pokemon.stats?.map ((stat : any) =>
                    <section>
                        <span className='puntos'>{stat.base}</span>
                        <span>{stat.name}</span>
                    </section>
                    )}
            </div>
        </div>
        </section>
    </div>
    </>
  )
}


