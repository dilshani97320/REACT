import logo from '../images/logo.png'
import React from 'react';



const navbar = () => {
    return (
        <div className="mainnav">
        
                
    <nav class="navbar navbar1 navbar-expand-md fixed-top-sm justify-content-center flex-nowrap">
    
    <h5 className="text-light">Event Master</h5>
    <img src={logo} width="40" height="40" />
    
    <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbar2">
        <span class="navbar-toggler-icon"></span>
    </button>
</nav>

<nav class="navbar navbar2 navbar-expand-md bg-light navbar-light">
    <div class="navbar-collapse collapse pt-2 pt-md-0" id="navbar2">
        <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link " href="#">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">About us</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Service</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Gallery</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Testemonial</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
            </li>
        </ul>
    </div>
</nav>
</div>
    )
    
}

export default navbar
