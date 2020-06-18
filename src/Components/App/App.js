import React from 'react';
import Header from '../Header/Header'
import Form from '../Form/Form'
import Footer from '../Footer/Footer'
import './App.css';
import PlayerBlock from '../PlayerBlock/PlayerBlock';
import axios from 'axios';
import LeaderBoards from '../Leaderboards/Leaderboards';
import { connect } from 'react-redux'
//router tools
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends React.Component {
  state = {
    version: '0.2.1',
  }

  render() {
    return (
      <Router>
        <div className="overflow-auto bg">
          <div className='container col-12 col-sm-10'>
            <div className='row col-12 text-center justify-content-center'>
              < Header />
              <div className='container my-5'><hr /></div>
              {/* IF THE username IS NOT SET, ADD THE FORM. OTHERWISE, SEND IN THE PLAYERBLOCK */}
              {this.props.name === '' ?
                <Form />
                : <PlayerBlock />}
            </div>
            <div className='container my-5'><hr /></div>
            <LeaderBoards />
            <Footer version={this.state.version} />
          </div >
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    time: state.time,
    name: state.name
  };
}
export default connect(mapStateToProps)(App);