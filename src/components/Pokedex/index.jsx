import React from 'react'
import Pokecard from '../Pokecard'

const Pokedex = ({ pokemon }) => {
    return (
        <>
            <div className="pokedex-container">
                <div className="pokecard">
                    {
                        pokemon.map((pokemon, idx) => {
                            return <Pokecard key={idx} pokemon={pokemon} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Pokedex
