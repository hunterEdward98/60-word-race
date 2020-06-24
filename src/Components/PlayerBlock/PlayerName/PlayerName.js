import React from 'react';
import { connect } from 'react-redux';
//This component displays a player's username to them
class PlayerName extends React.Component {
    render() {
        return (
            <div className='row justify-content-center' >
                <div className='col-12'>
                    <h3 className='col-6 text-left'>TIME: {this.props.time === 0 ? 0 : (this.props.date - this.props.time) / 1000}</h3></div>
                <h2 className='col-6'>{this.props.name}</h2>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        date: new Date(),
        time: state.time,
        name: state.name
    };
}
export default connect(mapStateToProps)(PlayerName);