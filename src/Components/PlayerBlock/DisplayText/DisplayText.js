import React from 'react';
const DisplayText = (props) => {
    const validation = props.validation;
    return (
        <div className='row justify-content-center'>
            <h3 className='col-6'>TEXT TO MATCH</h3>
            <p className='hide col-8'>{validation.map(item => item + ' ')}</p>
        </div>
    )
}
export default DisplayText