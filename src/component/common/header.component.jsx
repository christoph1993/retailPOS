import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
    render() {
        return (
    <div>
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#retail-link-nav" aria-expanded="false">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" href="#">Retail POS</Link>
                </div>

                <div className="collapse navbar-collapse" id="retail-link-nav">
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
        </div>
        )
    }
}

export default Header;