import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-default navbar-trans navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand text-brand" href="index.html">
                        <img src="images/logo.png" alt=""/>
                    </a>
                    <div className="navbar-collapse collapse justify-content-left" id="navbarDefault">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#" title="Trade"> Trade</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="" title="Earn"> Earn </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="" title="Project"> Project </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="" title="Audit"> Audit </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="" title="Analytics"> Analytics </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="" title="Event"> Event </a>
                            </li>
                            <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle down-arrow" href="#" title="Kala
            Project" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false" style={{color:'#25e72f'}}>Kala
                                Project</a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="" title="">Project 1</a>
                                    <a className="dropdown-item" href="" title="">Project 2</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="right-side">
                        <ul>
                            <li>
                                <a href="" className="sr-btn" data-toggle="modal" data-target="#myModal">Connect Wallet</a>
                            </li>
                            <li>
                                <a href="">
                                    <img src="images/light.png"/>
                                </a>
                            </li>

                        </ul>
                    </div>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault"
                        aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
