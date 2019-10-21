import React from 'react';

export const Score = (props) => {
    return (
        <div className='score'>
            <span className='score__number'>{props.score}</span>
        </div>
    )
}