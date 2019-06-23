import React, { Component } from "react";
import { NavLink } from "react-router-dom";


class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
                <NavLink className="navbar-brand .col-xs-6 .col-sm-4" to="/">Home</NavLink>
                <NavLink className="navbar-brand .col-xs-6 .col-sm-4" to="/organisations/">Organisations</NavLink>
                <NavLink className="navbar-brand .col-xs-6 .col-sm-4" to="/users">Users</NavLink>
            </nav>
        )
    }
}

export default Navigation;
