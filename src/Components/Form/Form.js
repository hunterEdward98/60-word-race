import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios'
class Form extends React.Component {
    state = {
        nameTyped: '',
    }
    getList = () => {
        axios.get('/list/new').then((response) => {
            const dispatch = this.props.dispatch;
            dispatch({ type: 'GET_WORDS', payload: response.data })
        }).catch((response) => {
            alert('couldnt get new list', response);
        })
    }
    setPlayer = () => {
        const { dispatch } = this.props;
        dispatch({ type: 'SET_PLAYER', payload: this.state.nameTyped })
        this.getList()
    }
    HandleChangeName = (event) => {
        this.setState({
            nameTyped: event.target.value
        });
    }
    render() {
        return (
            <div className='container' >
                <div className='row text-center justify-content'>
                    <div className='col-12 col-md-9 mx-auto'>
                        <input className='col-12' value={this.state.nameTyped} onChange={event => this.HandleChangeName(event)} />
                        {console.log}
                    </div>
                    <div className='col-6 col-md-3 mx-auto justify-content'>
                        <button className='col-12' onClick={() => this.setPlayer()}>Set Name</button></div>
                </div>
            </div >
        );
    }
}
export default connect()(Form);