import React from 'react';

export const ProgressBar = (props) => {

    console.log(props)

    return (
        <div id="progress">
            <div id="progress__bar" style={{width: `${props.progress}%`}}></div>
        </div>
    );
}