import React, { Component } from 'react'
import '../navbar/navbar.scss'
import Logo from "../../logo.svg"
export default function navbar() {
    return (
        <nav className="nav">
            <img src={Logo} />

            <ul className="links">

                <li><a href="/" className="link">Home</a></li>
                <li><a href="/" className="link">About</a></li>
                <li><a href="/" className="link active">Tours</a></li>
            </ul>
        </nav>
    )
}
