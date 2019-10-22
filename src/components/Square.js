import * as React from 'react';

export const Square = (props) => {
    const {color, text, onSquareClick = null} = props;

    return (
        <div
            className={`square ${color}`}
            style={{backgroundColor: color}}
            onClick={onSquareClick ? ()=>{onSquareClick(text)} : null}
        >
            <span className='square__text'>{text}</span>
        </div>
    );
}
