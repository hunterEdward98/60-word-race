import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
class LeaderBoards extends React.Component {
    getRecords = () => {
        axios.get('/list/winners').then((response) => {
            const { dispatch } = this.props;
            dispatch({ type: 'GET_RECORDS', payload: response.data })
        })
    }
    render() {
        return (
            <div className='container'>
                <div className='d-flex justify-content-center'>
                    <div className=' col-12 col-sm-8'>
                        <table className='table table-dark'>
                            <thead>
                                <tr>
                                    <th colSpan='3' className='h3'>LEADERBOARDS</th>
                                </tr>
                                <tr>
                                    <th scope='col'>RANK</th>
                                    <th scope='col'>NAME</th>
                                    <th scope='col'>FASTEST SPEED</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.getRecords()}
                                {this.props.records.map((x, i) => <tr key={x.username + i}><th scope='row'>#{i + 1}</th><td>{x.username}</td><td>{Math.floor((15 / (x.min) * 60)) / 10} Words Per Minute</td></tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return ({
        records: state.records
    })
}
export default connect(mapStateToProps)(LeaderBoards)