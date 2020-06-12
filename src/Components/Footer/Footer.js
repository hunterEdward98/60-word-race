import React from 'react';
class Footer extends React.Component {
    render() {
        return (
            <p className='text-right col-12'>VERSION#: {this.props.version}</p>
        )
    }
}
export default Footer;