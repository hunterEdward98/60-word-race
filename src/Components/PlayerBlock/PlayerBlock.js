import React from 'react'
import DisplayInput from './DisplayInput/DisplayInput';
import PlayerName from './PlayerName/PlayerName';
import DisplayText from './DisplayText/DisplayText';
import swal from 'sweetalert';

class PlayerBlock extends React.Component {
    state = {
        formTyped: '',
        name: this.props.name,
        validation: this.props.validation,
        submitted: false,
        time: new Date()
    }
    validate = () => {
        const typed = this.state.formTyped.split(' ');
        if (typed.length === this.state.validation.length) {
            const validation = this.state.validation;
            console.log(typed, validation);
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
    HandleChangeForm = (event) => {
        this.setState({
            formTyped: event.target.value
        });
    }
    sendForm = () => {
        if (this.validate() === true) {
            let totalTime = Math.ceil((new Date() - this.state.time) / 100);
            this.props.clear(totalTime, this.state.name);
        }
    }
    render() {

        return (
            <div className="container justify-content-center" >
                <PlayerName name={this.state.name} />
                <DisplayInput text={this.state.formTyped} setCurrentText={this.HandleChangeForm} submitText={this.sendForm} />
                <DisplayText validation={this.props.validation} />
            </ div>
        )
    }
}
export default PlayerBlock;