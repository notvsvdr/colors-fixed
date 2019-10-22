import React from 'react';
import { Square } from './Square';

export const Game = (props) => {

    const { colors, colorToGuess, textColors, onSquareClick } = props;

    return (
            <>
                <div className='guess-color-container'>
                    {colors && colors.map((color, idx) => {
                        return (
                            <Square key={color} color={color} text={textColors[idx]} onSquareClick={onSquareClick} />
                        );
                    })}
                </div>
                <div className='color-to-guess-container'>
                    <Square color={colorToGuess} />
                </div>
            </>
    );
}