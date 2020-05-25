import React from "react";
import "./Sidebar.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faHome, faPager, faPhone} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

export default function Sidebar() {
    return (
        <>
            <div className="sidebar sidebar-dark sidebar-main sidebar-expand-lg">
                <div className="sidebar-content">
                    <div className="card card-sidebar-mobile">
                        <ul className="nav nav-sidebar" data-nav-type="accordion">
                            <li className="nav-item-header d-none">
                                <div className="text-uppercase font-size-xs line-height-xs">Main</div>
                                <i className="icon-menu" title="Main"> </i>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    <FontAwesomeIcon icon={faHome} className="icon"/>
                                    <span>
									    Dashboard
								    </span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">
                                    <FontAwesomeIcon icon={faPhone} className="icon"/>
                                    <span>
									    Contact
								    </span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/navbar" className="nav-link">
                                    <FontAwesomeIcon icon={faBars} className="icon"/>
                                    <span>
									    Navbar
								    </span>
                                </Link>
                            </li>
                            <li className="nav-item nav-item-submenu">
                                <a className="nav-link collapsed" data-toggle="collapse" href="#subscribe_menu" role="button" aria-expanded="false" aria-controls="subscribe_menu">
                                    <FontAwesomeIcon icon={faPager} className="icon"/>
                                    <span>
                                        Subscribe
                                    </span>
                                </a>
                                <ul className="nav nav-group-sub collapse" id="subscribe_menu">
                                    <li className="nav-item">
                                        <Link to="/subscribe" className="nav-link">
                                            Subscribe List
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/subscribe_edit" className="nav-link">
                                            Edit Subscribe
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link">
                                    <FontAwesomeIcon icon={faPager} className="icon"/>
                                    <span>
                                        Changelog
                                    </span>
                                    <span className="badge bg-blue-400 align-self-center ml-auto">2.3</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    )
}
