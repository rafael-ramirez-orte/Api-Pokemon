import React from 'react'

const Pokemon = ({id, image, name, type, _callback }) => {
    const style = type + " poke-container";
    return (
        <div className={style}>
            <div className="numero"><small>#0{id}</small></div>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div>
        </div>
    )
}

export default Pokemon
