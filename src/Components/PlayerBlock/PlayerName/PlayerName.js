import React from 'react';
import { connect } from 'react-redux';
//This component displays a player's username to them
class PlayerName extends React.Component {
    render() {
        return (
            <div className='row justify-content-center' >
                <div className='col-12'>
                    <h3 className='col-6 text-left'>{this.props.time}</h3></div>
                <h2 className='col-6'>{this.props.name}</h2>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        time: (new Date() - state.time) / 1000
    };
}
export default connect(mapStateToProps)(PlayerName);