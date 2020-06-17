import React from 'react';
import { connect } from 'react';
//This component displays a player's username to them
class PlayerName extends React.Component {
    render() {
        return (
            <div className='row justify-content-center' >
                <h3 className='col-6'>{((new Date() - this.props.time) / 10)}</h3>
                <h2 className='col-6'>{this.props.name}</h2>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        time: state.time
    };
}
export default connect(mapStateToProps)(PlayerName);