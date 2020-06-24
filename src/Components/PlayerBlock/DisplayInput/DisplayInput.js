import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import swal from 'sweetalert'
class DisplayInput extends React.Component {
    state = {
        formTyped: '',
        typed: false
    }
    componentDidMount() {
        this.setTime('SET_TIME_ZERO')
    }
    clearList = () => {
        const dispatch = this.props.dispatch;
        dispatch({ type: 'CLEAR_WORDS', payload: [] });

    }
    validate = () => {
        const typed = this.state.formTyped.split(' ');
        const validation = this.props.words;
        console.log(typed, validation)
        for (let i in validation) {
            const word = validation[i];
            if (typed[i] !== word) {
                return false
            }
        }
        console.log('true')
        return true;
    }
    submitPlayer = (time, username) => {
        axios.post(`/list/players/${username}/${time}`).then((response) => {
            swal(`${username}, your time of ${Math.floor(15 / (time / 10) * 600) / 10} Words Per Minute is in the database.`);
            this.clearPlayer();
        }).catch((response) => {
            swal(`ERROR: there was an internal server error while trying to post to the leaderboard`)
        });
    }
    clearPlayer = () => {
        const { dispatch } = this.props;
        dispatch({ type: 'SET_PLAYER', payload: '' })
    }
    HandleChangeForm = (event) => {
        if (this.state.typed === false) {
            this.setTime('SET_TIME')
            this.setState({
                formTyped: event.target.value,
                typed: true
            });
        }
        this.setState({
            formTyped: event.target.value,
        });
    }
    setTime = (type) => {
        const dispatch = this.props.dispatch
        dispatch({
            type: type
        })

    }
    sendForm = () => {
        if (this.validate() === true) {
            let totalTime = Math.ceil((new Date() - this.props.time) / 100);
            this.submitPlayer(totalTime, this.props.name);
        }
    }
    render() {
        return (
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-12'>
                        <textarea rows='10' className='col-10 col-md-8' value={this.state.formTyped} onChange={event => this.HandleChangeForm(event)}></textarea>
                    </div>
                    <div className='btn btn-success' onClick={event => this.sendForm(event)}>DONE</div>
                </div>
            </div>
        )
    }
}
const stateToProps = (state) => {
    return ({
        words: state.words,
        time: state.time,
        name: state.name,
    })
}
export default connect(stateToProps)(DisplayInput);