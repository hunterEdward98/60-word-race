import React from 'react';
//This component displays a player's username to them
const PlayerName = (props) => {
    return (
        <div className='row justify-content-center'>
            <h2 className='col-6'>{props.name}</h2>
        </div>
    );
}
export default PlayerName