import React from 'react';

export const ProgressBar = (props) => {

    return (
        <div id="progress">
            <div id="progress__bar" style={{width: `${props.progress}%`}}></div>
        </div>
    );
}