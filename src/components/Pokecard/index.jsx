import React from 'react'

const Pokecard = ({ pokemon }) => {
    return (
        <>
            <div className="card-container">
                <div className="card">
                    <h1>{pokemon.name}</h1>
                    <img src={pokemon.image} alt={`${pokemon.name} image`} />
                    <h2>Type: {pokemon.type}</h2>
                </div>
            </div>
        </>
    )
}

export default Pokecard
