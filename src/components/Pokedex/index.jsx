import React from 'react'
import Pokecard from '../Pokecard'

const Pokedex = ({ pokemon }) => {
    return (
        <>
            <h1 className="title">Pokedex</h1>
            <div className="pokedex-container">
                {
                    pokemon.map((pokemon, idx) => {
                        return <Pokecard key={idx} pokemon={pokemon} />
                    })
                }
            </div>
        </>
    )
}

export default Pokedex
