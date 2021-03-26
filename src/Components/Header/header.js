import React, {Fragment} from "react";

import {Link} from "react-router-dom";

// import Search from "../Search/search"

import "./header.css";

const Header = () => {
    return(
        <Fragment>
        <div className="container">
            <div className="row header-bg">
                <div className="col-lg-4 header-block1">
                    <Link to="/" className="navbar-brand"><i class="fa fa-list-alt" aria-hidden="true"></i>To Do List</Link>
                </div>
                <div className="col-lg-4">
                </div>
                <div className="col-lg-4 header-block2">
                    <Link to="/add-todo" className="nav-link add-btm" aria-current="page">Add new To Do</Link>
                </div>
            </div>
        </div>
        {/* <Search /> */}
        </Fragment>
    )
}

export default Header;
