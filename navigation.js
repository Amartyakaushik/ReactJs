import React from "react";
function Navigation(props)
{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="nav-list">
        <li> <a href="#"> {props.title} </a> </li>
        <li> <a href="#"> About</a> </li>
        <li> <a href="#"> Services</a> </li>
        <li> <a href="#"> contact</a> </li>
        </ul>

        <div className="search-container">
            <input type="text" placeholder="Search..."/>
            <button type="button">Search</button>
        </div>
        </nav>
    )
    };

    Navigation.defaultProps = {title : 2 }
    export default Navigation;