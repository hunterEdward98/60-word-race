import React from 'react'
import DisplayInput from './DisplayInput/DisplayInput';
import PlayerName from './PlayerName/PlayerName';
import DisplayText from './DisplayText/DisplayText';
import swal from 'sweetalert';
import axios from 'axios'
import { connect } from 'react-redux'

class PlayerBlock extends React.Component {
    render() {
        return (
            <div className="container justify-content-center" >
                <PlayerName />
                <DisplayInput />
                <DisplayText />
            </ div>
        )
    }
}
export default connect()(PlayerBlock);