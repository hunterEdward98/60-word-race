import React from 'react'
import DisplayInput from './DisplayInput/DisplayInput';
import PlayerName from './PlayerName/PlayerName';
import DisplayText from './DisplayText/DisplayText';

class PlayerBlock extends React.Component {
    state = {
        formTyped: '',
        name: this.props.name,
        validation: this.props.validation,
        submitted: false
    }
    validate = () => {
        const typed = this.state.formTyped.split(' ');
        const validation = this.state.validation;
        let equal = true;
        for (let i in validation) {
            const word = validation[i];
            if (typed[i] !== word) {
                equal = false;
            }
        }
        console.log(equal);
        return equal;
    }
    HandleChangeForm = (event) => {
        this.setState({
            formTyped: event.target.value
        });
    }
    sendForm = () => {
        if (this.validate() === true) {
            this.props.clear();
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