import React from 'react';

export const ProgressBar = (props) => {

    return (
        <div className="progress">
            <div className="progress__bar" style={{width: `${props.progress}%`}}>
                {props.timeLeft && <span className='progress__seconds-left'>{`${props.timeLeft}s`}</span>}
            </div>
        </div>
    );
}