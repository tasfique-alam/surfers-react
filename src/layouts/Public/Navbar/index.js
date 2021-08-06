import React, { useState } from 'react'
import { Row, Col, Form, ListGroup } from "react-bootstrap";
import { FcBriefcase } from 'react-icons/fc';
import { BiAddToQueue, BiArchive } from 'react-icons/bi';

const Navbar = () => {

const [akash, setAkash] = useState(false)

    return (



        <div className="banner">
            <nav className="navbar navbar-expand-lg navbar-light  sticky-top">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img className="navbar-brand-logo" src="images/logo.png"></img>
                    </a>
                    <button class="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul id="top-bar" className="navbar-nav">
                            <li className={akash ? 'navitem active' : 'navitem'} onClick={()=>setAkash(!akash)}>
                                <a class="nav-link" href="#boards">
                                    boards
                                    <FcBriefcase className="" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a class="nav-link active" href="about-us">
                                    About us
                                </a>
                            </li>
                            <li className="nav-item">
                                <a class="nav-link active" href="#ou-team">
                                    our-team
                                </a>
                            </li>
                            <li className="nav-item">
                                <a class="nav-link active" href="#technology">
                                    Technology
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#team">
                                    Team
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#dealers">
                                    dealers
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="banner-main text-center">
                <h1 className="banner-main-title">
                    Ride every wave as if it's your last
                </h1>
                <h2 className="banner-main-side">
                    We love the motion of the ocean
                </h2>
            </div>
        </div>
    )
}

export default Navbar