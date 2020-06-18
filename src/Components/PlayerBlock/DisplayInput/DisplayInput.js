import React from 'react'
import { connect } from 'react-redux'
class DisplayInput extends React.Component {
    state = {
        formTyped: ''
    }
    HandleChangeForm = (event) => {
        this.setState({
            formTyped: event.target.value
        });
    }
    setTime = () => {
        const dispatch = this.props.dispatch
        dispatch({
            type: 'SET_TIME',
            payload: ''
        })

    }
    sendForm = () => {
        if (this.validate() === true) {
            let totalTime = Math.ceil((new Date() - this.state.time) / 100);
            this.props.clear(totalTime, this.state.name);
        }
    }
    render() {
        return (
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-12'>
                        <textarea rows='10' className='col-10 col-md-8' value={this.state.formTyped} onChange={event => this.HandleChangeForm(event)}></textarea>
                    </div>
                    <div className='btn btn-success' onClick={event => this.props.submitText(event)}>DONE</div>
                </div>
            </div>
        )
    }
}
const stateToProps = (state) => {
    return ({
        words: state.words
    })
}
export default connect(stateToProps)(DisplayInput);