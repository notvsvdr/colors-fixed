import * as React from 'react';

export const Square = (props) => {
    const { color, text='guess', onSquareClick = null } = props;

    const isClickable = !!onSquareClick;

    return (
        <div
            className={`square ${color} ${!isClickable ? 'unclickable' : ''}` }
            style={{backgroundColor: color}}
            onClick={isClickable ? ()=>{onSquareClick(text)} : null}
        >
            <span className='square__text'>{text}</span>
        </div>
    );
}
