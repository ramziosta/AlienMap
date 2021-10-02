import React from "react";
import "./Header.css"
import "./styles"
import radio from "./radio.jpg"
import deathStar from "./deathStar.png"

const Header = () => {
    return (
       <nav>
           <div class="nav-wrapper">
                <div class="data">
                    <h6>Map Data Visualization</h6>
                    <div id="bar"></div>
                    <ul id="stats">
                        <li class="table"><a href=""><img src={radio}></img></a></li>
                        <li class="table"><a href=""><img src={deathStar}></img></a></li>
                        <li class="table"><a href="">UFO </a></li>
                        <li class="table"><a href="">BigFoot</a></li>
                        <li class="table"><a href="">lights</a></li>
                        <li class="table"><a href="">ET</a></li>
                        <li class="table"><a href="">Saucers</a></li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Header;

/* <div class="navbar">
<div class="menu">
<h4>Menu</h4>
    <ul>
        <li><a href="">User</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
        <li><a href="">Store</a></li>
    </ul>
    <button>DarkMode</button>
    <ul>
        <li><a href="">Instagram</a></li>
        <li><a href="">Twitter</a></li>
        <li><a href="">Facebook</a></li>
    </ul>
</div>*/