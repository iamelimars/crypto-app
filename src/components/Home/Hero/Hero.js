import React from 'react'

const hero = ({coins}) => (
    <div>
        {coins.map((coin) => (
            <h1 key={coin.id}>{coin.name}</h1>
        ))}
    </div>
)

export default hero