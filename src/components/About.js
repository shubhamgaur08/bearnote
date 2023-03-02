import React from 'react'
import '../styles/about.css';
import awesome from '../images/about - awesome.jpeg'
import login from '../images/about - awesome.svg'
import { Link } from "react-router-dom";

// import Alertss from "./Alertss";

function About() {
    return (
        <div>
            <img className="img-fluid" src="../images/logo.png" alt="BearNote"></img>
            {/* <Alertss /> */}
            <div className="text-white aboutImg text-center">
                <div className="note-img">
                    <h1 className="display-4">Empowering  Students</h1>
                    <p>An online web platform where you can create, edit, upload, delete your notes/information privately and securely without any disturbancee</p>
                </div>
            </div>

            <div className="container mt-5 ">
                <div className="row">
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h2 className="mb-3" style={{ fontWeight: "Bold" }}>Make something <span style={{ color: "#9C27B0" }}>Awesome</span> </h2>
                        <p>BearNote is made from the pain of writing all the things in notebook which is very hectic :(, So we mad an online web platform where you can create, edit, upload, delete your notes/information privately and securely without any disturbancee.
                            you can also access your notes anywhere in your world, at anytime time . So dont forget to Create note because creating anything is always important
                        </p>
                        
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid awesome" src={awesome} alt="about-awesome" />
                    </div>
                </div>

                <div className="row login mt-5 mb-5 p-5">
                    <div className="col-md-6">
                        <img className="img-fluid" src={login} alt="about-awesome" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h2 className="mb-3" style={{ fontWeight: "Bold" }}>Powering the <span style={{ color: "#9C27B0" }}>internet’s visuals</span> </h2>
                        <p>
                            How we started? The concept was simple. BearNote was born from the pain of writing all the things in notebook which is very hectic :( .
                            An online web platform where you can create, edit, upload, delete your notes/information privately and securely without any disturbancee
                        </p>
                        
                    </div>
                </div>
            </div>

            <footer>
                <div className="content">
                    <div className="top">
                        <div className="logo-details">
                            <span className="logo_name"><span style={{ color: "#9C27B0" }}>B</span>earNote</span>
                        </div>
                        <div className="media-icons">
                            <Link to="https://www.facebook.com/shubhamg007" target="_blank"><i className="fab fa-facebook-f"></i></Link>
                            <Link to="https://github.com/shubhamgaur08" target="_blank"><i className="fab fa-github"></i></Link>
                            <Link to="/"><i className="fab fa-instagram" ></i></Link>
                            <Link to="https://www.linkedin.com/in/shubham-gound-45b75715b/" target="_blank"><i className="fab fa-linkedin-in"></i></Link>
                            <Link to="/"><i className="fab fa-youtube" target="_blank"></i></Link>
                        </div>
                    </div>
                    <div className="link-boxes">
                        <ul className="box">
                            <li className="link_name">Company</li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/new">New Notes</Link></li>
                            <li><Link to="/about">About us</Link></li>
                            <li><Link to="/">Get started</Link></li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">Services</li>
                            <li><Link to="/">Your Notes</Link></li>
                            <li><Link to="/new">New Note</Link></li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">Account</li>
                            <li><Link to="/login">Sign-in</Link></li>
                            <li><Link to="/signup">Join Free</Link></li>
                        </ul>
                       
                        <ul className="box input-box">
                            <li className="link_name">About BearNote</li>
                            <li style={{color: "#F7FFFF"}}>
                            An online web platform where you can create, edit, upload, delete your notes/information privately and securely without any disturbancee
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bottom-details">
                    <div className="bottom_text">
                        <span className="copyright_text">Copyright © 2023 <Link to="/">BearNote</Link>All rights reserved</span>
                        <span className="policy_terms">
                            <Link to="/">Privacy policy</Link>
                            <Link to="/">Terms & condition</Link>
                        </span>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default About
