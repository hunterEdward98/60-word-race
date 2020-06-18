import React from 'react'
import DisplayInput from './DisplayInput/DisplayInput';
import PlayerName from './PlayerName/PlayerName';
import DisplayText from './DisplayText/DisplayText';
import swal from 'sweetalert';
import axios from 'axios'
import { connect } from 'react-redux'

class PlayerBlock extends React.Component {
    state = {
        formTyped: '',
        time: new Date()
    }
    clearList = () => {
        const dispatch = this.props.dispatch;
        dispatch({ type: 'CLEAR_WORDS', payload: [] });
    }
    validate = () => {
        const typed = this.state.formTyped.split(' ');
        if (typed.length === this.state.validation.length) {
            const validation = this.state.validation;
            let equal = true;
            for (let i in validation) {
                const word = validation[i];
                if (typed[i] !== word) {
                    return false
                }
            }
            console.log(equal);
            return equal;
        }
        swal(`Stop! You've violated the law!`)
        return false;
    }

    submitPlayer = (time, username) => {
        axios.post(`/list/players/${username}/${time}`).then((response) => {
            this.clearPlayer();
        });
    }
    clearPlayer = () => {
        const { dispatch } = this.props;
        dispatch({ type: 'CLEAR_PLAYER', payload: '' })
    }
    render() {

        return (
            <div className="container justify-content-center" >
                <PlayerName />
                <DisplayInput text={this.state.formTyped} setCurrentText={this.HandleChangeForm} submitText={this.sendForm} getList={this.getList} />
                <DisplayText validation={this.props.validation} />
            </ div>
        )
    }
}
export default connect()(PlayerBlock);