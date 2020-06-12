import React from 'react'
const DisplayInput = (props) => {
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-12'>
                    <textarea rows='10' className='col-10 col-md-8' value={props.text} onChange={event => props.setCurrentText(event)}></textarea>
                </div>

                <div className='btn btn-success' onClick={event => props.submitText(event)}>DONE</div>
            </div>
        </div>
    )
}
export default DisplayInput;