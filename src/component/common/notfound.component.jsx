import React, { Component } from 'react';

class NotFound extends Component {
    render() {
        return (
            <div>
                <h1>Page Not Found</h1>
                <p>This page was not found.<br/>Click <a href="/">here</a> to return home</p>
            </div>
        )
    }
}

export default NotFound;