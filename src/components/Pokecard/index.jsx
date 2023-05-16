import React from 'react'

const Pokecard = ({pokemon}) => {
    return (
        <>
            <div className="card-container">
                <div className="card">
                    <h1>{pokemon.name}</h1>
                </div>
            </div>
        </>
    )
}

export default Pokecard
