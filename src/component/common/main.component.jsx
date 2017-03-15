import React, { Component } from 'react';
import { Link } from 'react-router';

class Main extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">POS</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li><Link to="/sale" activeClassName="active">Sales</Link></li>
                                <li><Link to="/search" activeClassName="active">Search</Link></li>
                                <li><Link to="/inventory" activeClassName="active">Inventory Management</Link></li>
                                <li><Link to="/report" activeClassName="active">Reports</Link></li>
                                <li><Link to="/about" activeClassName="active">About</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Main;