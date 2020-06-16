import React from 'react'

class LeaderBoards extends React.Component {
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
                                    <th scope='col'>TIME</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.data.map((x, i) => <tr key={x.Name + i}><th scope='row'>#{i + 1}</th><td>{x.Name}</td><td>{x.Time}</td></tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
export default LeaderBoards;