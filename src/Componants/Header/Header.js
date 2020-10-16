import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logos/Group 1329.png';

const Header = () => {
    return (
        <div className = "mt-4 mb-3">
            <nav className="navbar-expand-lg navbar-light bg-light row d-flex">
                <div className="col-md-4">
                    <Link to = "/"><img src={logo} height="50" loading="lazy" className = "pl-3"/></Link>
                </div>
                <div className="navbar-nav col-md-8 justify-content-end">
                    <Link to = "/home" className="nav-link active">Home <span className="sr-only">(current)</span></Link>
                    <a className="nav-link" href="#">Doantion</a>
                    <Link to = '/event' className="nav-link">Events</Link>
                    <Link className="nav-link" to = '/login'>Login</Link>
                    <Link to = '/registration'><button className="btn my-2 btn-primary">Register</button></Link>
                    <Link to = '/dashboard/admin'><button className="btn my-2 btn-dark ml-3 mr-3" type="submit">Admin</button></Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;