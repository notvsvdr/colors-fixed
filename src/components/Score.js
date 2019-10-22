import React from 'react';

export const Score = (props) => {
    return (
        <div className='score square unclickable'>
            <span className='score__number'>Score: {props.score}</span>
        </div>
    );
}