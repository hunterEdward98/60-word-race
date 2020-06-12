import React from 'react';
const Form = (props) => {
    return (
        <div className='container'>
            <div className='row text-center justify-content'>
                <div className='col-12 col-md-9 mx-auto'>
                    <input className='col-12' value={props.typed} onChange={event => props.handleChange(event)} />
                </div>
                <div className='col-6 col-md-3 mx-auto justify-content'>
                    <button className='col-12' onClick={event => props.setPlayer(event)}>Set Name</button></div>
            </div>
        </div >
    );
}
export default Form;