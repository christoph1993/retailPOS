import React, { Component } from 'react';

import Header from './header.component.jsx';

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Main;