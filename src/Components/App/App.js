import React from 'react';
import Header from '../Header/Header'
import Form from '../Form/Form'
import Footer from '../Footer/Footer'
import './App.css';
import PlayerBlock from '../PlayerBlock/PlayerBlock';
import Axios from 'axios';
import LeaderBoards from '../Leaderboards/Leaderboards';

class App extends React.Component {
  state = {
    yourName: '',
    winners: [{ Name: 'AnonymousCat', Time: '2:00' }, { Name: 'AnonymousWeasel', Time: '2:30' }, { Name: 'Anonym0usHack3r', Time: '3:00' }, { Name: 'AnonymousDog', Time: '3:15' }, { Name: 'AnonymousEagle', Time: '3:30' }],
    message: ['Hello', 'World'],
    nameTyped: '',
    formTyped: '',
    winner: '',
    difference: '',
    version: '0.0.3'
  }
  submitPlayer = () => {
    Axios({
      method: 'POST',
      url: '/records'
    }).then((response) => {
      this.clearPlayer();
    })
  }
  clearPlayer = () => {
    this.setState({
      yourName: ''
    })
  }
  setPlayer = () => {
    this.setState({
      yourName: this.state.nameTyped
    });
  }
  HandleChangeName = (event) => {
    this.setState({
      nameTyped: event.target.value
    });
  }
  render() {
    return (
      <div className="overflow-auto bg">
        <div className='container col-12 col-sm-10'>
          <div className='row col-12 text-center justify-content-center'>
            < Header />
            <div className='container my-5'><hr /></div>

            {/* IF THE USERNAME IS NOT SET, ADD THE FORM. OTHERWISE, SEND IN THE PLAYERBLOCK */}
            {this.state.yourName === '' ?
              <Form typed={this.state.typed} handleChange={this.HandleChangeName} setPlayer={this.setPlayer} />
              : <PlayerBlock name={this.state.yourName} validation={this.state.message} clear={this.clearPlayer} />}
          </div>

          <div className='container my-5'><hr /></div>
          <LeaderBoards data={this.state.winners} />
          <Footer version={this.state.version} />
        </div >
      </div>
    );
  }
}

export default App;
