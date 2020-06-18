import React from 'react';
import { connect } from 'react-redux'
class DisplayText extends React.Component {
    render() {
        return (
            <div className='row justify-content-center' >
                <h3 className='col-6'>TEXT TO MATCH</h3>
                <p className='hide col-8'>{this.props.words.map(item => item + ' ')}</p>
            </div>
        )
    }
}
const stateToProps = (state) => {
    return ({
        words: state.words
    })
}
export default connect(stateToProps)(DisplayText)