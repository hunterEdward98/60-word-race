import React from 'react';
import Header from '../Header/Header'
import Form from '../Form/Form'
import Footer from '../Footer/Footer'
import './App.css';
import PlayerBlock from '../PlayerBlock/PlayerBlock';
import axios from 'axios';
import LeaderBoards from '../Leaderboards/Leaderboards';
import { connect } from 'react-redux'

class App extends React.Component {
  state = {
    yourName: '',
    message: [],
    nameTyped: '',
    formTyped: '',
    winner: '',
    difference: '',
    version: '0.0.3',
    time: 0,
  }
  submitPlayer = (time, username) => {
    axios.post(`/list/players/${username}/${time}`).then((response) => {
      this.clearPlayer();
    });
  }
  clearPlayer = () => {
    this.setState({
      yourName: ''
    })
  }
  setPlayer = () => {
    this.getList();
    this.setState({
      yourName: this.state.nameTyped
    })
    const { dispatch } = this.props;
    dispatch({ type: 'SET_TIME', payload: new Date() })
  }
  HandleChangeName = (event) => {
    this.setState({
      nameTyped: event.target.value
    });
  }
  clearList = () => {
    this.setState({
      message: []
    })
  }

  getList = () => {
    axios.get('/list/new').then((response) => {
      console.log(response.data);
      this.setState({
        message: response.data
      })
    }).catch((response) => {
      alert('couldnt get new list', response);
    })
  }
  render() {
    return (
      <div className="overflow-auto bg">
        {console.log(this.state.time)}
        <div className='container col-12 col-sm-10'>
          <div className='row col-12 text-center justify-content-center'>
            < Header />
            <div className='container my-5'><hr /></div>

            {/* IF THE username IS NOT SET, ADD THE FORM. OTHERWISE, SEND IN THE PLAYERBLOCK */}
            {this.state.yourName === '' ?
              <Form typed={this.state.typed} handleChange={this.HandleChangeName} setPlayer={this.setPlayer} />
              : <PlayerBlock name={this.state.yourName} validation={this.state.message} clear={this.submitPlayer} />}
          </div>

          <div className='container my-5'><hr /></div>
          <LeaderBoards data={this.getRecords} />
          <Footer version={this.state.version} />
        </div >
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    time: state.time
  };
}
export default connect(mapStateToProps)(App);